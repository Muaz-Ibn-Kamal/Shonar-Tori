import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Blocked IPs and suspicious patterns
const blockedIPs = new Set<string>()
const suspiciousPatterns = [
  /\b(union|select|insert|delete|drop|create|alter|exec|script)\b/i,
  /<script[^>]*>.*?<\/script>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /\.\.\//g,
  /\/etc\/passwd/g,
  /\/proc\/self\/environ/g,
]

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  const realIP = request.headers.get("x-real-ip")

  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }
  if (realIP) {
    return realIP
  }
  return request.ip || "unknown"
}

function isRateLimited(ip: string, limit = 100, windowMs = 60000): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return false
  }

  if (record.count >= limit) {
    return true
  }

  record.count++
  return false
}

function containsSuspiciousContent(content: string): boolean {
  return suspiciousPatterns.some((pattern) => pattern.test(content))
}

function validateRequest(request: NextRequest): { isValid: boolean; reason?: string } {
  const url = request.nextUrl.pathname + request.nextUrl.search
  const userAgent = request.headers.get("user-agent") || ""

  // Check for suspicious patterns in URL
  if (containsSuspiciousContent(url)) {
    return { isValid: false, reason: "Suspicious URL pattern detected" }
  }

  // Check for malicious user agents
  const maliciousAgents = ["sqlmap", "nikto", "nmap", "masscan", "zap"]
  if (maliciousAgents.some((agent) => userAgent.toLowerCase().includes(agent))) {
    return { isValid: false, reason: "Malicious user agent detected" }
  }

  // Check for common attack patterns
  const referer = request.headers.get("referer") || ""
  if (containsSuspiciousContent(referer)) {
    return { isValid: false, reason: "Suspicious referer detected" }
  }

  return { isValid: true }
}

export function middleware(request: NextRequest) {
  const ip = getClientIP(request)
  const pathname = request.nextUrl.pathname

  // Block known malicious IPs
  if (blockedIPs.has(ip)) {
    console.log(`[SECURITY] Blocked IP attempt: ${ip}`)
    return new NextResponse("Access Denied", { status: 403 })
  }

  // Rate limiting
  if (isRateLimited(ip)) {
    console.log(`[SECURITY] Rate limit exceeded for IP: ${ip}`)
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": "60",
      },
    })
  }

  // Validate request for suspicious content
  const validation = validateRequest(request)
  if (!validation.isValid) {
    console.log(`[SECURITY] Suspicious request blocked: ${validation.reason} from IP: ${ip}`)
    blockedIPs.add(ip) // Auto-block suspicious IPs
    return new NextResponse("Access Denied", { status: 403 })
  }

  // Admin routes protection
  if (pathname.startsWith("/admin")) {
    const authToken = request.cookies.get("admin-token")?.value

    if (pathname !== "/admin/login" && !authToken) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  // Add security headers
  const response = NextResponse.next()

  // Security headers
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  // Content Security Policy
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://vercel.live https://vitals.vercel-insights.com; frame-ancestors 'none';",
  )

  // HSTS (HTTP Strict Transport Security)
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

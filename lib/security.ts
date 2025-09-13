import { z } from "zod"
import crypto from "crypto"

// Input validation schemas
export const emailSchema = z.string().email().max(255)
export const passwordSchema = z
  .string()
  .min(8)
  .max(128)
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  )

export const productSchema = z.object({
  name: z
    .string()
    .min(1)
    .max(200)
    .regex(/^[a-zA-Z0-9\s\-_.,()]+$/, "Invalid characters in product name"),
  description: z.string().min(1).max(2000),
  price: z.number().positive().max(999999),
  category: z.string().min(1).max(100),
  artisan: z.string().min(1).max(100),
})

export const orderSchema = z.object({
  customerName: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: emailSchema,
  phone: z.string().regex(/^[+]?[1-9][\d]{0,15}$/, "Invalid phone number format"),
  address: z.string().min(10).max(500),
  items: z
    .array(
      z.object({
        id: z.string().uuid(),
        quantity: z.number().positive().max(100),
        price: z.number().positive(),
      }),
    )
    .min(1)
    .max(50),
})

// Sanitization functions
export function sanitizeInput(input: string): string {
  return input
    .replace(/<script[^>]*>.*?<\/script>/gi, "") // Remove script tags
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, "") // Remove event handlers
    .replace(/[<>]/g, "") // Remove angle brackets
    .trim()
}

export function sanitizeHTML(html: string): string {
  // Basic HTML sanitization - in production, use a library like DOMPurify
  return html
    .replace(/<script[^>]*>.*?<\/script>/gi, "")
    .replace(/<iframe[^>]*>.*?<\/iframe>/gi, "")
    .replace(/<object[^>]*>.*?<\/object>/gi, "")
    .replace(/<embed[^>]*>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
}

// Password hashing (use bcrypt in production)
export function hashPassword(password: string): string {
  return crypto
    .createHash("sha256")
    .update(password + process.env.PASSWORD_SALT || "default-salt")
    .digest("hex")
}

export function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash
}

// JWT token utilities (simplified - use proper JWT library in production)
export function generateToken(payload: any): string {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url")
  const payloadStr = Buffer.from(JSON.stringify({ ...payload, exp: Date.now() + 24 * 60 * 60 * 1000 })).toString(
    "base64url",
  )
  const signature = crypto
    .createHmac("sha256", process.env.JWT_SECRET || "default-secret")
    .update(`${header}.${payloadStr}`)
    .digest("base64url")

  return `${header}.${payloadStr}.${signature}`
}

export function verifyToken(token: string): any {
  try {
    const [header, payload, signature] = token.split(".")

    const expectedSignature = crypto
      .createHmac("sha256", process.env.JWT_SECRET || "default-secret")
      .update(`${header}.${payload}`)
      .digest("base64url")

    if (signature !== expectedSignature) {
      throw new Error("Invalid signature")
    }

    const decodedPayload = JSON.parse(Buffer.from(payload, "base64url").toString())

    if (decodedPayload.exp < Date.now()) {
      throw new Error("Token expired")
    }

    return decodedPayload
  } catch (error) {
    throw new Error("Invalid token")
  }
}

// CSRF protection
export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString("hex")
}

export function verifyCSRFToken(token: string, sessionToken: string): boolean {
  return token === sessionToken
}

// File upload security
export function validateFileUpload(file: File): { isValid: boolean; error?: string } {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"]
  const maxSize = 5 * 1024 * 1024 // 5MB

  if (!allowedTypes.includes(file.type)) {
    return { isValid: false, error: "Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed." }
  }

  if (file.size > maxSize) {
    return { isValid: false, error: "File size too large. Maximum 5MB allowed." }
  }

  // Check for malicious file names
  const dangerousPatterns = [/\.php$/i, /\.jsp$/i, /\.asp$/i, /\.exe$/i, /\.bat$/i, /\.sh$/i]
  if (dangerousPatterns.some((pattern) => pattern.test(file.name))) {
    return { isValid: false, error: "Dangerous file type detected." }
  }

  return { isValid: true }
}

// Audit logging
export function logSecurityEvent(event: string, details: any, ip?: string) {
  const timestamp = new Date().toISOString()
  const logEntry = {
    timestamp,
    event,
    details,
    ip,
    severity: getSeverityLevel(event),
  }

  // In production, send to proper logging service
  console.log("[SECURITY LOG]", JSON.stringify(logEntry))

  // For critical events, you might want to send alerts
  if (logEntry.severity === "critical") {
    // Send alert to admin/security team
    console.error("[CRITICAL SECURITY EVENT]", logEntry)
  }
}

function getSeverityLevel(event: string): "low" | "medium" | "high" | "critical" {
  const criticalEvents = ["sql_injection_attempt", "xss_attempt", "brute_force_attack"]
  const highEvents = ["suspicious_file_upload", "admin_login_failure", "rate_limit_exceeded"]
  const mediumEvents = ["invalid_input", "csrf_token_mismatch"]

  if (criticalEvents.includes(event)) return "critical"
  if (highEvents.includes(event)) return "high"
  if (mediumEvents.includes(event)) return "medium"
  return "low"
}

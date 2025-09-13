import { type NextRequest, NextResponse } from "next/server"
import {
  emailSchema,
  passwordSchema,
  sanitizeInput,
  verifyPassword,
  generateToken,
  logSecurityEvent,
} from "@/lib/security"
import { z } from "zod"

const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

// Mock admin credentials (in production, use database)
const ADMIN_CREDENTIALS = {
  email: "admin@shonartori.com",
  passwordHash: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918", // 'admin123'
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    const body = await request.json()

    // Sanitize inputs
    const sanitizedData = {
      email: sanitizeInput(body.email || ""),
      password: sanitizeInput(body.password || ""),
    }

    // Validate input
    const validation = loginSchema.safeParse(sanitizedData)
    if (!validation.success) {
      logSecurityEvent("invalid_login_attempt", { errors: validation.error.errors, ip })
      return NextResponse.json({ error: "Invalid input data" }, { status: 400 })
    }

    const { email, password } = validation.data

    // Check credentials
    if (email !== ADMIN_CREDENTIALS.email || !verifyPassword(password, ADMIN_CREDENTIALS.passwordHash)) {
      logSecurityEvent("admin_login_failure", { email, ip })

      // Add delay to prevent brute force attacks
      await new Promise((resolve) => setTimeout(resolve, 2000))

      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Generate JWT token
    const token = generateToken({ email, role: "admin" })

    logSecurityEvent("admin_login_success", { email, ip })

    // Set secure cookie
    const response = NextResponse.json({ success: true, message: "Login successful" })
    response.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60, // 24 hours
      path: "/admin",
    })

    return response
  } catch (error) {
    logSecurityEvent("login_error", { error: error instanceof Error ? error.message : "Unknown error" })
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

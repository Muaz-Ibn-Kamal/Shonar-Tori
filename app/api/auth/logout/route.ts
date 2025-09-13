import { type NextRequest, NextResponse } from "next/server"
import { logSecurityEvent } from "@/lib/security"

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

    logSecurityEvent("admin_logout", { ip })

    const response = NextResponse.json({ success: true, message: "Logged out successfully" })

    // Clear the admin token cookie
    response.cookies.set("admin-token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0,
      path: "/admin",
    })

    return response
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

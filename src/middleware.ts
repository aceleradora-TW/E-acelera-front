import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const sessionToken =
    request.cookies.get("next-auth.session-token") ||
    request.cookies.get("__Secure-next-auth.session-token")

    const callbackUrl =
    new URLSearchParams(request.nextUrl.search).get("callbackUrl") || "/"

    const parsedUrl = new URL(callbackUrl, request.url) 

  if (request.nextUrl.pathname.startsWith("/login") && sessionToken) {
    try {
      const baseUrl = process.env.BACKEND_BASE_URL
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${sessionToken.value}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        return NextResponse.json({ error: "Failed to register user" }, { status: response.status })
      }

      return NextResponse.redirect(new URL(parsedUrl, request.url))
    } catch (error) {
      console.error("Internal server error: ", error)
      return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/login"],
}

import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'
 
export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value
    const secret = process.env.SECRET

    if (!token) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    try {
        const secretKey = new TextEncoder().encode(secret);
        await jwtVerify(token, secretKey)
        return NextResponse.next();
    } catch (err) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }
}
 
export const config = {
  matcher: ['/dashboard', '/lesson', '/settings', '/study/:path*']
}
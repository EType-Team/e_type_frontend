import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtDecode } from 'jwt-decode'

interface CustomJwtPayload {
  user_id: number
  role?: string
  exp: number
}

function isValidToken(decodedToken: any): decodedToken is CustomJwtPayload {
  return (
    typeof decodedToken === 'object' &&
    decodedToken !== null &&
    typeof decodedToken.user_id === 'number' &&
    (typeof decodedToken.role === 'string' || decodedToken.role === undefined) &&
    typeof decodedToken.exp === 'number'
  )
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (request.nextUrl.pathname.startsWith('/admin')) {
    // tokenが存在しない場合はログインページにリダイレクト
    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    try {
      const decodedToken = jwtDecode(token)
      console.log('Decoded token:', decodedToken)
      
      if (!isValidToken(decodedToken)) {
        console.error('Invalid token structure')
        return NextResponse.redirect(new URL('/auth/login', request.url))
      }

      if (decodedToken.role !== 'admin') {
        console.log('管理者でないため、ダッシュボードにリダイレクトします。')
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
    } catch (error) {
      console.error('Token decode error:', error)
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}

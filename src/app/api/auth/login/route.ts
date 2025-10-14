import { NextRequest, NextResponse } from 'next/server'

// Simple hardcoded credentials for demo purposes
// In production, use environment variables and proper password hashing
const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || 'admin',
  password: process.env.ADMIN_PASSWORD || 'admin123'
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Validate credentials
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      // Generate a simple token (in production, use JWT)
      const token = Buffer.from(`${username}:${Date.now()}`).toString('base64')
      
      return NextResponse.json({
        success: true,
        token,
        message: 'Login successful'
      })
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid username or password' },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    )
  }
}

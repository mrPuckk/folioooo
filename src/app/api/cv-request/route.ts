import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for Vercel (serverless functions)
// Note: This will reset on each deployment, but works for demo purposes
let emailStorage: string[] = []

// For production, you should use a proper database like:
// - Vercel Postgres
// - Supabase
// - PlanetScale
// - MongoDB Atlas
// - Firebase Firestore

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if email already exists
    if (emailStorage.includes(email.toLowerCase())) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      )
    }

    // Add new email to in-memory storage
    emailStorage.push(email.toLowerCase())

    // Log the request
    console.log(`New CV request from: ${email}`)
    console.log(`Total emails stored: ${emailStorage.length}`)

    return NextResponse.json(
      { 
        message: 'Email submitted successfully',
        count: emailStorage.length 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing CV request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to view all emails (for admin purposes)
export async function GET() {
  try {
    return NextResponse.json({
      emails: emailStorage,
      count: emailStorage.length,
      lastUpdated: new Date().toISOString()
    }, { status: 200 })
  } catch (error) {
    console.error('Error reading emails:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

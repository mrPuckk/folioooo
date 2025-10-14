import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { initializeDatabase } from '@/lib/database'

// Initialize database on first request
let dbInitialized = false

async function ensureDatabaseInitialized() {
  if (!dbInitialized) {
    await initializeDatabase()
    dbInitialized = true
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureDatabaseInitialized()
    
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
    const existingEmail = await sql`
      SELECT id FROM cv_requests WHERE email = ${email.toLowerCase()}
    `

    if (existingEmail.rows.length > 0) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      )
    }

    // Insert new email
    await sql`
      INSERT INTO cv_requests (email) VALUES (${email.toLowerCase()})
    `

    // Get total count
    const countResult = await sql`SELECT COUNT(*) as count FROM cv_requests`
    const totalCount = parseInt(countResult.rows[0].count)

    // Log the request
    console.log(`New CV request from: ${email}`)
    console.log(`Total emails in database: ${totalCount}`)

    return NextResponse.json(
      { 
        message: 'Email submitted successfully',
        count: totalCount 
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

// GET endpoint to view all emails (for admin purposes)
export async function GET() {
  try {
    await ensureDatabaseInitialized()
    
    const result = await sql`
      SELECT email, created_at 
      FROM cv_requests 
      ORDER BY created_at DESC
    `

    return NextResponse.json({
      emails: result.rows.map(row => row.email),
      count: result.rows.length,
      lastUpdated: new Date().toISOString(),
      details: result.rows
    }, { status: 200 })
  } catch (error) {
    console.error('Error reading emails:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

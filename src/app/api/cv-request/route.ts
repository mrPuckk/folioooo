import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

// Path to store the emails file
const EMAILS_FILE_PATH = path.join(process.cwd(), 'data', 'cv-requests.json')

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = path.dirname(EMAILS_FILE_PATH)
  if (!existsSync(dataDir)) {
    await mkdir(dataDir, { recursive: true })
  }
}

// Read existing emails
async function readEmails() {
  try {
    await ensureDataDirectory()
    if (existsSync(EMAILS_FILE_PATH)) {
      const data = await readFile(EMAILS_FILE_PATH, 'utf-8')
      return JSON.parse(data)
    }
    return { emails: [], count: 0 }
  } catch (error) {
    console.error('Error reading emails:', error)
    return { emails: [], count: 0 }
  }
}

// Write emails to file
async function writeEmails(emails: string[]) {
  try {
    await ensureDataDirectory()
    const data = {
      emails,
      count: emails.length,
      lastUpdated: new Date().toISOString()
    }
    await writeFile(EMAILS_FILE_PATH, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Error writing emails:', error)
    throw error
  }
}

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

    // Read existing emails
    const { emails: existingEmails } = await readEmails()
    
    // Check if email already exists
    if (existingEmails.includes(email.toLowerCase())) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      )
    }

    // Add new email
    const updatedEmails = [...existingEmails, email.toLowerCase()]
    await writeEmails(updatedEmails)

    // Log the request (optional)
    console.log(`New CV request from: ${email}`)

    return NextResponse.json(
      { 
        message: 'Email submitted successfully',
        count: updatedEmails.length 
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
    const data = await readEmails()
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error('Error reading emails:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'

// Fallback in-memory storage for when MongoDB is not available
let fallbackStorage: string[] = []

async function getCvRequestsCollection() {
  try {
    const { getCvRequestsCollection: getCollection } = await import('@/lib/mongodb')
    return await getCollection()
  } catch (error) {
    console.warn('MongoDB not available, using fallback storage:', error)
    return null
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

    const collection = await getCvRequestsCollection()

    if (collection) {
      // Use MongoDB
      const existingEmail = await collection.findOne({ 
        email: email.toLowerCase() 
      })

      if (existingEmail) {
        return NextResponse.json(
          { error: 'Email already exists' },
          { status: 409 }
        )
      }

      await collection.insertOne({
        email: email.toLowerCase(),
        created_at: new Date(),
        updated_at: new Date()
      })

      const totalCount = await collection.countDocuments()
      
      console.log(`New CV request from: ${email}`)
      console.log(`Total emails in database: ${totalCount}`)

      return NextResponse.json(
        { 
          message: 'Email submitted successfully',
          count: totalCount 
        },
        { status: 200 }
      )
    } else {
      // Use fallback storage
      if (fallbackStorage.includes(email.toLowerCase())) {
        return NextResponse.json(
          { error: 'Email already exists' },
          { status: 409 }
        )
      }

      fallbackStorage.push(email.toLowerCase())
      
      console.log(`New CV request from: ${email} (fallback storage)`)
      console.log(`Total emails in fallback storage: ${fallbackStorage.length}`)

      return NextResponse.json(
        { 
          message: 'Email submitted successfully',
          count: fallbackStorage.length 
        },
        { status: 200 }
      )
    }

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
    const collection = await getCvRequestsCollection()

    if (collection) {
      // Use MongoDB
      const emails = await collection
        .find({})
        .sort({ created_at: -1 })
        .toArray()

      return NextResponse.json({
        emails: emails.map(doc => doc.email),
        count: emails.length,
        lastUpdated: new Date().toISOString(),
        details: emails.map(doc => ({
          email: doc.email,
          created_at: doc.created_at
        }))
      }, { status: 200 })
    } else {
      // Use fallback storage
      return NextResponse.json({
        emails: fallbackStorage,
        count: fallbackStorage.length,
        lastUpdated: new Date().toISOString(),
        details: fallbackStorage.map(email => ({
          email,
          created_at: new Date().toISOString()
        }))
      }, { status: 200 })
    }
  } catch (error) {
    console.error('Error reading emails:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

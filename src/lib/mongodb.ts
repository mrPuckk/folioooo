import { MongoClient, Db } from 'mongodb'

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const uri = process.env.MONGODB_URL || process.env.MONGODB_URI
  
  if (!uri) {
    // In development, provide a helpful error message
    if (process.env.NODE_ENV === 'development') {
      throw new Error('Please define the MONGODB_URL environment variable inside .env.local')
    }
    // In production, throw a generic error
    throw new Error('Database connection not configured')
  }

  try {
    const client = new MongoClient(uri)
    await client.connect()

    const db = client.db(process.env.MONGODB_DB || 'portfolio')

    cachedClient = client
    cachedDb = db

    return { client, db }
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
    throw new Error('Database connection failed')
  }
}

export async function getCvRequestsCollection() {
  const { db } = await connectToDatabase()
  return db.collection('cv_requests')
}

import { MongoClient, Db } from 'mongodb'

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
  }

  const client = new MongoClient(uri)
  await client.connect()

  const db = client.db(process.env.MONGODB_DB || 'portfolio')

  cachedClient = client
  cachedDb = db

  return { client, db }
}

export async function getCvRequestsCollection() {
  const { db } = await connectToDatabase()
  return db.collection('cv_requests')
}

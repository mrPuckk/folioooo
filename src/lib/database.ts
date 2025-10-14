import { sql } from '@vercel/postgres'

export async function initializeDatabase() {
  try {
    // Create the cv_requests table
    await sql`
      CREATE TABLE IF NOT EXISTS cv_requests (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `

    // Create indexes
    await sql`
      CREATE INDEX IF NOT EXISTS idx_cv_requests_email ON cv_requests(email)
    `

    await sql`
      CREATE INDEX IF NOT EXISTS idx_cv_requests_created_at ON cv_requests(created_at)
    `

    // Create trigger function
    await sql`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
          NEW.updated_at = NOW();
          RETURN NEW;
      END;
      $$ language 'plpgsql'
    `

    // Create trigger
    await sql`
      CREATE TRIGGER update_cv_requests_updated_at 
          BEFORE UPDATE ON cv_requests 
          FOR EACH ROW 
          EXECUTE FUNCTION update_updated_at_column()
    `

    console.log('Database initialized successfully')
    return true
  } catch (error) {
    console.error('Error initializing database:', error)
    return false
  }
}

-- Database schema for CV requests
-- This file can be used to set up the database in Vercel Postgres

CREATE TABLE IF NOT EXISTS cv_requests (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_cv_requests_email ON cv_requests(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_cv_requests_created_at ON cv_requests(created_at);

-- Add a trigger to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_cv_requests_updated_at 
    BEFORE UPDATE ON cv_requests 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

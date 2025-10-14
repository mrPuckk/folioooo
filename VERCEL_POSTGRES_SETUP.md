# Vercel Postgres Setup Guide

## 1. Set up Vercel Postgres Database

### In Vercel Dashboard:
1. Go to your project dashboard
2. Click on the "Storage" tab
3. Click "Create Database" → "Postgres"
4. Choose a name for your database (e.g., "portfolio-db")
5. Select a region close to your users
6. Click "Create"

### Environment Variables:
Vercel will automatically add these environment variables to your project:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL` 
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

## 2. Database Schema

The database will be automatically initialized when the first API request is made. The schema includes:

```sql
CREATE TABLE cv_requests (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 3. Testing

### Local Development:
1. Install PostgreSQL locally or use Vercel's development database
2. Create a `.env.local` file with your database connection string
3. Run `npm run dev` and test the API endpoints

### Production:
1. Deploy to Vercel
2. The database will be automatically initialized on first request
3. Test the email submission form

## 4. Accessing Submitted Emails

### Via API:
```bash
# Get all emails
curl -X GET https://your-site.vercel.app/api/cv-request

# Response format:
{
  "emails": ["email1@example.com", "email2@example.com"],
  "count": 2,
  "lastUpdated": "2025-10-14T06:38:35.674Z",
  "details": [
    {
      "email": "email1@example.com",
      "created_at": "2025-10-14T06:38:35.674Z"
    }
  ]
}
```

### Via Vercel Dashboard:
1. Go to your project → Storage → Postgres
2. Click on your database
3. Use the SQL editor to query:
```sql
SELECT * FROM cv_requests ORDER BY created_at DESC;
```

## 5. Benefits

✅ **Persistent Storage** - Emails survive deployments
✅ **Scalable** - Handles high traffic
✅ **Reliable** - Managed by Vercel
✅ **Secure** - Built-in security features
✅ **Easy to Query** - Standard SQL interface
✅ **Free Tier** - Generous limits for portfolios

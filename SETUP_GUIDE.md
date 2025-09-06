# Sales Dashboard - Setup & Running Guide

## Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** - [Download here](https://git-scm.com/)

## Quick Start Commands

### 1. Clone and Install Dependencies

\`\`\`bash
# Clone the repository
git clone <your-repo-url>
cd sales-dashboard-monorepo

# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..

# Install backend dependencies
cd backend
npm install
cd ..
\`\`\`

### 2. Supabase Setup (Choose Option A or B)

#### Option A: Local Supabase (Recommended for Development)

\`\`\`bash
# Install Supabase CLI
npm install -g supabase

# Initialize Supabase locally
supabase init

# Start local Supabase services
supabase start

# This will output your local database credentials:
# API URL: http://localhost:54321
# DB URL: postgresql://postgres:postgres@localhost:54322/postgres
# anon key: [your-anon-key]
# service_role key: [your-service-role-key]
\`\`\`

#### Option B: Cloud Supabase

\`\`\`bash
# 1. Go to https://supabase.com/dashboard
# 2. Create a new project
# 3. Get your project URL and anon key from Settings > API
\`\`\`

### 3. Environment Configuration

\`\`\`bash
# Copy environment files
cp .env.example .env
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env

# Edit the environment files with your Supabase credentials
\`\`\`

**Frontend (.env.local):**
\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321  # or your cloud URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_API_URL=http://localhost:3001
\`\`\`

**Backend (.env):**
\`\`\`env
SUPABASE_URL=http://localhost:54321  # or your cloud URL
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
PORT=3001
CORS_ORIGIN=http://localhost:3000
\`\`\`

### 4. Database Setup

\`\`\`bash
# Run migrations to create tables
supabase db reset

# Or manually run migrations
psql -h localhost -p 54322 -U postgres -d postgres -f supabase/migrations/001_initial_schema.sql

# Seed with sample data
psql -h localhost -p 54322 -U postgres -d postgres -f supabase/seed/001_sample_data.sql
\`\`\`

### 5. Start Development Servers

#### Option A: Start Both Services Together
\`\`\`bash
# From root directory
npm run dev
\`\`\`

#### Option B: Start Services Separately

**Terminal 1 - Backend:**
\`\`\`bash
cd backend
npm run start:dev
# Backend will run on http://localhost:3001
# API docs available at http://localhost:3001/api
\`\`\`

**Terminal 2 - Frontend:**
\`\`\`bash
cd frontend
npm run dev
# Frontend will run on http://localhost:3000
\`\`\`

## Access the Application

- **Dashboard**: http://localhost:3000
- **API Documentation**: http://localhost:3001/api
- **Supabase Studio**: http://localhost:54323 (local only)

## Default Login Credentials

\`\`\`
Email: admin@dabang.com
Password: admin123
\`\`\`

## Useful Commands

### Development
\`\`\`bash
# Install new dependencies
npm install <package-name> --workspace=frontend
npm install <package-name> --workspace=backend

# Run tests
npm run test --workspace=frontend
npm run test --workspace=backend

# Build for production
npm run build --workspace=frontend
npm run build --workspace=backend

# Lint code
npm run lint --workspace=frontend
npm run lint --workspace=backend
\`\`\`

### Database Management
\`\`\`bash
# Reset database (drops all data)
supabase db reset

# Create new migration
supabase migration new <migration-name>

# Apply migrations
supabase db push

# Generate TypeScript types
supabase gen types typescript --local > frontend/types/supabase.ts
\`\`\`

### Supabase Management
\`\`\`bash
# View logs
supabase logs

# Stop local services
supabase stop

# Check status
supabase status
\`\`\`

## Troubleshooting

### Common Issues

1. **Port already in use**
   \`\`\`bash
   # Kill processes on ports
   npx kill-port 3000 3001 54321 54322 54323
   \`\`\`

2. **Database connection issues**
   \`\`\`bash
   # Restart Supabase
   supabase stop
   supabase start
   \`\`\`

3. **Missing environment variables**
   - Ensure all `.env` files are properly configured
   - Check that Supabase is running and credentials are correct

4. **Frontend can't connect to backend**
   - Verify backend is running on port 3001
   - Check CORS configuration in backend
   - Ensure `NEXT_PUBLIC_API_URL` is set correctly

### Reset Everything
\`\`\`bash
# Complete reset (use with caution)
supabase stop
rm -rf .supabase
supabase start
supabase db reset
\`\`\`

## Production Deployment

### Frontend (Vercel)
\`\`\`bash
cd frontend
npm run build
# Deploy to Vercel or your preferred platform
\`\`\`

### Backend (Railway/Render)
\`\`\`bash
cd backend
npm run build
# Deploy to Railway, Render, or your preferred platform
\`\`\`

## Project Structure

\`\`\`
sales-dashboard-monorepo/
├── frontend/          # Next.js application
├── backend/           # NestJS API
├── supabase/          # Database migrations and config
├── package.json       # Root workspace configuration
└── README.md         # Project documentation
\`\`\`

## Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify all environment variables are set correctly
3. Ensure Supabase is running and accessible
4. Check the console logs for detailed error messages

# Sales Dashboard - Setup Guide

This guide will help you set up and run the Sales Dashboard locally with Supabase integration.

## Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier available)
- Git

## 🚀 Quick Start

### 1. Clone and Install Dependencies

\`\`\`bash
# Clone the repository
git clone <your-repo-url>
cd sales-dashboard-monorepo

# Install dependencies for both frontend and backend
npm install
\`\`\`

### 2. Set Up Supabase

1. **Create a Supabase Project:**
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Choose your organization and create a project
   - Wait for the project to be ready

2. **Get Your Supabase Credentials:**
   - Go to Project Settings → API
   - Copy your `Project URL` and `anon public` key
   - Go to Project Settings → Database → Connection string
   - Copy your service role key from API settings

3. **Run Database Migrations:**
   - Go to your Supabase Dashboard → SQL Editor
   - Copy and paste the content from `supabase/migrations/001_initial_schema.sql`
   - Click "Run" to create all tables
   - Copy and paste the content from `supabase/seed/001_sample_data.sql`
   - Click "Run" to insert sample data

### 3. Configure Environment Variables

\`\`\`bash
# Copy environment files
cp .env.example .env
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env

# Edit .env files with your Supabase credentials
\`\`\`

**Root .env:**
\`\`\`env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key
SUPABASE_ANON_KEY=your_anon_key
\`\`\`

**Frontend .env.local:**
\`\`\`env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
\`\`\`

**Backend .env:**
\`\`\`env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key
PORT=3001
CORS_ORIGIN=http://localhost:3000
\`\`\`

### 4. Run the Application

\`\`\`bash
# Start both frontend and backend in development mode
npm run dev

# Or run them separately:
npm run dev:frontend  # Runs on http://localhost:3000
npm run dev:backend   # Runs on http://localhost:3001
\`\`\`

## 📱 Access the Application

- **Frontend Dashboard:** http://localhost:3000
- **Backend API:** http://localhost:3001/api
- **API Documentation:** http://localhost:3001/api/docs

## 🗄️ Database Schema

The application uses the following main tables:
- `users` - User accounts and profiles
- `sales` - Individual sales transactions
- `orders` - Customer orders
- `products` - Product catalog
- `visitor_analytics` - Website visitor data
- `revenue_analytics` - Daily revenue breakdown
- `customer_satisfaction` - Customer feedback and ratings
- `sales_targets` - Monthly sales targets vs reality
- `country_sales` - Sales by country/region
- `service_analytics` - Service volume metrics

## 🔧 Development Commands

\`\`\`bash
# Install dependencies
npm install

# Development
npm run dev              # Start both frontend and backend
npm run dev:frontend     # Start only frontend (Next.js)
npm run dev:backend      # Start only backend (NestJS)

# Building
npm run build            # Build both applications
npm run build:frontend   # Build frontend only
npm run build:backend    # Build backend only

# Production
npm run start            # Start both in production mode
npm run start:frontend   # Start frontend in production
npm run start:backend    # Start backend in production

# Linting and Formatting
npm run lint             # Lint both applications
npm run lint:fix         # Fix linting issues
npm run format           # Format code with Prettier
\`\`\`

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Railway/Render)
1. Connect your GitHub repository to Railway or Render
2. Set environment variables in the platform dashboard
3. Deploy the backend service

## 🔍 Troubleshooting

### Common Issues:

1. **Supabase Connection Error:**
   - Verify your Supabase URL and keys are correct
   - Check if your Supabase project is active
   - Ensure RLS policies allow your operations

2. **CORS Issues:**
   - Make sure `CORS_ORIGIN` in backend .env matches your frontend URL
   - Check if both services are running on correct ports

3. **Database Migration Issues:**
   - Ensure you have proper permissions in Supabase
   - Check the SQL Editor for any error messages
   - Verify all tables were created successfully

4. **Port Conflicts:**
   - Change ports in .env files if 3000/3001 are occupied
   - Update CORS_ORIGIN and API_URL accordingly

## 📞 Support

If you encounter any issues:
1. Check the console logs for error messages
2. Verify all environment variables are set correctly
3. Ensure Supabase project is properly configured
4. Check that all dependencies are installed

## 🎯 Features

- **Real-time Dashboard:** Live sales metrics and analytics
- **Interactive Charts:** Revenue, customer satisfaction, and visitor insights
- **Geographic Sales Mapping:** Sales distribution by country
- **Product Performance:** Top-selling products with popularity metrics
- **Target Tracking:** Sales targets vs actual performance
- **Responsive Design:** Works on desktop, tablet, and mobile devices
\`\`\`

```json file="" isHidden

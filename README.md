# Sales Dashboard Monorepo

A production-ready full-stack sales dashboard built with Next.js, NestJS, and Supabase.

## 🚀 Tech Stack

### Frontend
- **Next.js 14+** with TypeScript and App Router
- **Material-UI (MUI)** for components and theming
- **Recharts** for data visualization
- **Zustand** for state management
- **Axios** for API calls

### Backend
- **NestJS** with TypeScript
- **Supabase** for database and authentication
- **Swagger/OpenAPI** for API documentation
- **class-validator** for DTO validation

## 📂 Project Structure

\`\`\`
├── frontend/          # Next.js application
│   ├── src/
│   │   ├── app/       # App Router pages
│   │   ├── components/ # Reusable components
│   │   ├── hooks/     # Custom hooks
│   │   ├── lib/       # Utilities and configurations
│   │   ├── store/     # Zustand stores
│   │   └── theme/     # MUI theme configuration
├── backend/           # NestJS application
│   ├── src/
│   │   ├── config/    # Environment configuration
│   │   ├── supabase/  # Supabase client wrapper
│   │   ├── dashboard/ # Dashboard module
│   │   └── common/    # Shared utilities
└── supabase/         # Database migrations and seeds
\`\`\`

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+
- npm 9+
- Supabase account

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd sales-dashboard-monorepo
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Setup environment variables**
   \`\`\`bash
   # Copy environment files
   cp frontend/.env.example frontend/.env.local
   cp backend/.env.example backend/.env
   
   # Update with your Supabase credentials
   \`\`\`

4. **Setup Supabase**
   \`\`\`bash
   # Install Supabase CLI
   npm install -g @supabase/cli
   
   # Initialize Supabase
   cd supabase
   supabase init
   supabase start
   
   # Run migrations and seed data
   supabase db push
   supabase db seed
   \`\`\`

5. **Start development servers**
   \`\`\`bash
   npm run dev
   \`\`\`

## 🌐 API Endpoints

- `GET /api/dashboard/metrics` - Key performance indicators
- `GET /api/dashboard/revenue` - Revenue trends and analytics
- `GET /api/dashboard/customer-satisfaction` - Customer satisfaction scores
- `GET /api/dashboard/visitor-insights` - Visitor analytics data
- `GET /api/dashboard/top-products` - Top performing products

## 📊 Features

- **Responsive Design** - Pixel-perfect implementation across all devices
- **Real-time Data** - Live dashboard updates
- **Interactive Charts** - Multiple chart types with hover effects
- **Global Search** - Search functionality across dashboard
- **User Management** - Profile management and authentication
- **Export Functionality** - Data export capabilities
- **Dark/Light Theme** - Theme switching support

## 🚀 Deployment

### Frontend (Vercel)
\`\`\`bash
cd frontend
vercel --prod
\`\`\`

### Backend (Railway/Render)
\`\`\`bash
cd backend
# Follow platform-specific deployment instructions
\`\`\`

## 📝 API Documentation

Access Swagger documentation at: `http://localhost:3001/api/docs`

## 🧪 Testing

\`\`\`bash
# Run all tests
npm test

# Run frontend tests
npm run test:frontend

# Run backend tests
npm run test:backend
\`\`\`

## 📄 License

MIT License - see LICENSE file for details.

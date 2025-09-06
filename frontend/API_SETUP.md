# API Integration Setup Guide

## Environment Configuration

The frontend is now configured to use the backend API running on `http://localhost:3001`. 

### Environment Variables

Create a `.env.local` file in the frontend directory with the following content:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_API_TIMEOUT=10000

# Environment
NODE_ENV=development
```

### API Endpoints

The following endpoints are now integrated:

- `GET /api/dashboard/metrics` - Key performance indicators
- `GET /api/dashboard/revenue` - Revenue trends data
- `GET /api/dashboard/customer-satisfaction` - Customer satisfaction scores
- `GET /api/dashboard/visitor-insights` - Visitor analytics
- `GET /api/dashboard/top-products` - Top performing products

## Features Implemented

### Production-Grade API Service
- ✅ Retry logic with exponential backoff
- ✅ Request timeout handling
- ✅ Comprehensive error handling
- ✅ Request/response logging
- ✅ TypeScript interfaces for all API responses

### React Hooks for Data Fetching
- ✅ `useMetrics()` - Fetch metrics data
- ✅ `useRevenue()` - Fetch revenue data
- ✅ `useCustomerSatisfaction()` - Fetch satisfaction data
- ✅ `useVisitorInsights()` - Fetch visitor insights
- ✅ `useTopProducts()` - Fetch top products
- ✅ `useAllDashboardData()` - Fetch all data in parallel

### UI Components
- ✅ Loading spinners with custom messages
- ✅ Error displays with retry functionality
- ✅ Responsive design maintained
- ✅ Dynamic data rendering

### Dashboard Components Updated
- ✅ MetricsCards - Now uses dynamic API data
- ✅ TotalRevenue - Revenue chart with API data
- ✅ CustomerSatisfaction - Satisfaction trends from API
- ✅ VisitorInsights - Visitor analytics from API
- ✅ TopProducts - Product performance from API

## Usage

1. Start the backend server:
   ```bash
   cd backend
   npm run start:dev
   ```

2. Start the frontend server:
   ```bash
   cd frontend
   npm run dev
   ```

3. The dashboard will automatically fetch data from the API and display:
   - Loading states while fetching
   - Error states with retry options
   - Dynamic data when available

## Error Handling

The implementation includes comprehensive error handling:

- **Network errors**: Automatic retry with exponential backoff
- **API errors**: Proper error messages and retry options
- **Timeout errors**: Configurable timeout with fallback
- **Empty data**: Graceful handling of empty responses

## Performance Features

- **Parallel data fetching**: All dashboard data can be fetched simultaneously
- **Request caching**: Built-in retry logic prevents unnecessary requests
- **Responsive loading**: Loading states maintain UI layout
- **Error recovery**: Users can retry failed requests

## Development

The API service is designed for production use with:

- TypeScript interfaces for type safety
- Comprehensive error handling
- Request/response logging
- Configurable timeouts and retries
- Clean separation of concerns

All components now use the dynamic API data while maintaining the original design and functionality.

# Sales Dashboard Backend API Documentation

## Base Information

- **Base URL**: `http://localhost:3001/api`
- **API Documentation**: `http://localhost:3001/api/docs` (Swagger UI)
- **Framework**: NestJS with TypeScript
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Not implemented (public endpoints)

## Global Configuration

- **Global Prefix**: `/api`
- **CORS**: Enabled for `http://localhost:3000`
- **Validation**: Global validation pipe with whitelist and transform
- **Error Handling**: Global exception filter
- **Logging**: Global logging interceptor

## API Endpoints

### Dashboard Controller
**Base Route**: `/api/dashboard`

---

#### 1. Get Key Performance Indicators
```http
GET /api/dashboard/metrics
```

**Description**: Retrieves key performance indicators and metrics for the dashboard.

**Tags**: `dashboard`

**Response**: `200 OK`
```typescript
MetricsResponseDto[]
```

**Response Schema**:
```json
[
  {
    "id": 1,
    "title": "Total Revenue",
    "value": "$54,239",
    "change": "+12.5%",
    "icon": "dollar-sign",
    "color": "#10B981"
  }
]
```

**Response Fields**:
- `id` (number): Metric ID
- `title` (string): Metric title
- `value` (string): Metric value
- `change` (string): Change from previous period
- `icon` (string): Icon name
- `color` (string): Color code

---

#### 2. Get Revenue Trends
```http
GET /api/dashboard/revenue
```

**Description**: Retrieves revenue trends and analytics data including online and offline sales.

**Tags**: `dashboard`

**Response**: `200 OK`
```typescript
RevenueResponseDto[]
```

**Response Schema**:
```json
[
  {
    "day": "Monday",
    "onlineSales": 15000,
    "offlineSales": 8000
  }
]
```

**Response Fields**:
- `day` (string): Day of the week
- `onlineSales` (number): Online sales amount
- `offlineSales` (number): Offline sales amount

---

#### 3. Get Customer Satisfaction
```http
GET /api/dashboard/customer-satisfaction
```

**Description**: Retrieves customer satisfaction scores and trends.

**Tags**: `dashboard`

**Response**: `200 OK`
```typescript
CustomerSatisfactionResponseDto[]
```

**Response Schema**:
```json
[
  {
    "month": "January",
    "lastMonth": 85,
    "thisMonth": 92,
    "createdAt": "2025-01-01T00:00:00.000Z"
  }
]
```

**Response Fields**:
- `month` (string): Month
- `lastMonth` (number): Last month satisfaction score
- `thisMonth` (number): This month satisfaction score
- `createdAt` (Date): Record creation date

---

#### 4. Get Visitor Insights
```http
GET /api/dashboard/visitor-insights
```

**Description**: Retrieves visitor analytics data including customer segmentation.

**Tags**: `dashboard`

**Response**: `200 OK`
```typescript
VisitorInsightsResponseDto[]
```

**Response Schema**:
```json
[
  {
    "month": "January",
    "loyalCustomers": 1250,
    "newCustomers": 380,
    "uniqueCustomers": 1630,
    "createdAt": "2025-01-01T00:00:00.000Z"
  }
]
```

**Response Fields**:
- `month` (string): Month
- `loyalCustomers` (number): Number of loyal customers
- `newCustomers` (number): Number of new customers
- `uniqueCustomers` (number): Number of unique customers
- `createdAt` (Date): Record creation date

---

#### 5. Get Top Products
```http
GET /api/dashboard/top-products
```

**Description**: Retrieves top performing products by popularity and sales.

**Tags**: `dashboard`

**Response**: `200 OK`
```typescript
TopProductsResponseDto[]
```

**Response Schema**:
```json
[
  {
    "id": 1,
    "name": "iPhone 15 Pro",
    "popularity": 95,
    "sales": 88
  }
]
```

**Response Fields**:
- `id` (number): Product ID
- `name` (string): Product name
- `popularity` (number): Popularity percentage
- `sales` (number): Sales percentage

---

## Error Handling

The API uses a global exception filter that handles all errors consistently.

### Common Error Responses

#### 400 Bad Request
```json
{
  "statusCode": 400,
  "message": ["Validation error details"],
  "error": "Bad Request"
}
```

#### 500 Internal Server Error
```json
{
  "statusCode": 500,
  "message": "Internal server error",
  "error": "Internal Server Error"
}
```

---

## Environment Variables

### Required Environment Variables
```env
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key

# Server Configuration
PORT=3001
NODE_ENV=development

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# Swagger Configuration
SWAGGER_TITLE=Sales_Dashboard_API
SWAGGER_DESCRIPTION=API_documentation_for_Sales_Dashboard
SWAGGER_VERSION=1.0.0
```

---

## Data Models

### MetricsResponseDto
```typescript
class MetricsResponseDto {
  id: number;           // Metric ID
  title: string;        // Metric title
  value: string;        // Metric value
  change: string;       // Change from previous period
  icon: string;         // Icon name
  color: string;        // Color code
}
```

### RevenueResponseDto
```typescript
class RevenueResponseDto {
  day: string;          // Day of the week
  onlineSales: number;  // Online sales amount
  offlineSales: number; // Offline sales amount
}
```

### CustomerSatisfactionResponseDto
```typescript
class CustomerSatisfactionResponseDto {
  month: string;        // Month
  lastMonth: number;    // Last month satisfaction score
  thisMonth: number;    // This month satisfaction score
  createdAt: Date;      // Record creation date
}
```

### VisitorInsightsResponseDto
```typescript
class VisitorInsightsResponseDto {
  month: string;        // Month
  loyalCustomers: number;   // Number of loyal customers
  newCustomers: number;     // Number of new customers
  uniqueCustomers: number;  // Number of unique customers
  createdAt: Date;          // Record creation date
}
```

### TopProductsResponseDto
```typescript
class TopProductsResponseDto {
  id: number;           // Product ID
  name: string;         // Product name
  popularity: number;   // Popularity percentage
  sales: number;        // Sales percentage
}
```

---

## Request Examples

### Using curl

#### Get Metrics
```bash
curl -X GET "http://localhost:3001/api/dashboard/metrics" \
  -H "Accept: application/json"
```

#### Get Revenue Data
```bash
curl -X GET "http://localhost:3001/api/dashboard/revenue" \
  -H "Accept: application/json"
```

#### Get Customer Satisfaction
```bash
curl -X GET "http://localhost:3001/api/dashboard/customer-satisfaction" \
  -H "Accept: application/json"
```

#### Get Visitor Insights
```bash
curl -X GET "http://localhost:3001/api/dashboard/visitor-insights" \
  -H "Accept: application/json"
```

#### Get Top Products
```bash
curl -X GET "http://localhost:3001/api/dashboard/top-products" \
  -H "Accept: application/json"
```

### Using JavaScript/TypeScript (Frontend)

```typescript
const API_BASE_URL = 'http://localhost:3001/api';

// Get metrics
const getMetrics = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard/metrics`);
  const data = await response.json();
  return data;
};

// Get revenue data
const getRevenue = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard/revenue`);
  const data = await response.json();
  return data;
};

// Get customer satisfaction
const getCustomerSatisfaction = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard/customer-satisfaction`);
  const data = await response.json();
  return data;
};

// Get visitor insights
const getVisitorInsights = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard/visitor-insights`);
  const data = await response.json();
  return data;
};

// Get top products
const getTopProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard/top-products`);
  const data = await response.json();
  return data;
};
```

---

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account and project

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd sales-dashboard-monorepo/backend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Start development server
npm run start:dev
```

### Testing the API
```bash
# Start the backend server
npm run start

# Visit Swagger documentation
# http://localhost:3001/api/docs

# Test endpoints manually
curl http://localhost:3001/api/dashboard/metrics
```

---

## Database Integration

The API integrates with Supabase (PostgreSQL) through the following tables:
- `metrics` - Stores KPI metrics data
- `revenue` - Stores revenue trends data  
- `customer_satisfaction` - Stores satisfaction scores
- `visitor_insights` - Stores visitor analytics
- `top_products` - Stores product performance data

### Database Schema
Refer to the migration files in `/supabase/migrations/` for the complete database schema.

---

## Security Considerations

### Current State
- **No Authentication**: All endpoints are currently public
- **CORS**: Configured for localhost development
- **Validation**: Input validation using class-validator
- **Error Handling**: Global exception filter prevents sensitive data leakage

### Future Enhancements
- JWT-based authentication
- Role-based access control (RBAC)
- API rate limiting
- Request/response encryption
- API key management

---

## Performance Considerations

- **Database Queries**: Optimized queries through Supabase service
- **Response Caching**: Not implemented (recommended for production)
- **Pagination**: Not implemented (all data returned)
- **Compression**: Not configured

---

## Logging and Monitoring

- **Request Logging**: Global logging interceptor logs all requests
- **Error Logging**: Comprehensive error logging through NestJS logger
- **Performance Monitoring**: Not implemented

---

## Contact & Support

For API-related questions or issues:
- Check the Swagger documentation at `/api/docs`
- Review the backend source code
- Submit issues through the project repository

---

*Last Updated: September 6, 2025*
*API Version: 1.0.0*

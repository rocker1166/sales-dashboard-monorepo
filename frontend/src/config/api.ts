/**
 * API Configuration
 * Centralized configuration for API endpoints and settings
 */

export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  TIMEOUT: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '10000'),
  ENDPOINTS: {
    DASHBOARD: {
      METRICS: '/api/dashboard/metrics',
      REVENUE: '/api/dashboard/revenue',
      CUSTOMER_SATISFACTION: '/api/dashboard/customer-satisfaction',
      VISITOR_INSIGHTS: '/api/dashboard/visitor-insights',
      TOP_PRODUCTS: '/api/dashboard/top-products',
    }
  }
} as const;

export const getApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

/**
 * Production-Grade API Service Layer
 * Handles all API communications with proper error handling, retries, and logging
 */

import { API_CONFIG, getApiUrl } from '@/config/api';
import {
  MetricsApiResponse,
  RevenueApiResponse,
  CustomerSatisfactionApiResponse,
  VisitorInsightsApiResponse,
  TopProductsApiResponse,
  ApiError
} from '@/types/api';

// Custom Error Class for API errors
export class ApiServiceError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'ApiServiceError';
  }
}

// Request configuration interface
interface RequestConfig {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

// Default request configuration
const DEFAULT_CONFIG: RequestConfig = {
  timeout: API_CONFIG.TIMEOUT,
  retries: 3,
  retryDelay: 1000,
};

/**
 * Generic fetch wrapper with retry logic and error handling
 */
async function fetchWithRetry<T>(
  url: string,
  config: RequestConfig = {}
): Promise<T> {
  const { timeout, retries, retryDelay } = { ...DEFAULT_CONFIG, ...config };
  
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt <= retries!; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        const errorData: ApiError = await response.json().catch(() => ({
          statusCode: response.status,
          message: response.statusText,
          error: 'Unknown Error'
        }));
        
        throw new ApiServiceError(
          Array.isArray(errorData.message) 
            ? errorData.message.join(', ') 
            : errorData.message,
          errorData.statusCode
        );
      }
      
      const data: T = await response.json();
      return data;
      
    } catch (error) {
      lastError = error as Error;
      
      // Don't retry on certain errors
      if (error instanceof ApiServiceError && 
          (error.statusCode === 400 || error.statusCode === 401 || error.statusCode === 403)) {
        throw error;
      }
      
      // Don't retry on abort (timeout)
      if (error instanceof Error && error.name === 'AbortError') {
        throw new ApiServiceError('Request timeout', 408, error);
      }
      
      // Wait before retrying (exponential backoff)
      if (attempt < retries!) {
        const delay = retryDelay! * Math.pow(2, attempt);
        await new Promise(resolve => setTimeout(resolve, delay));
        console.warn(`API request failed, retrying in ${delay}ms... (attempt ${attempt + 1}/${retries! + 1})`);
      }
    }
  }
  
  throw new ApiServiceError(
    `API request failed after ${retries! + 1} attempts: ${lastError?.message}`,
    undefined,
    lastError
  );
}

/**
 * Dashboard API Service Class
 */
export class DashboardApiService {
  private static instance: DashboardApiService;
  
  private constructor() {}
  
  public static getInstance(): DashboardApiService {
    if (!DashboardApiService.instance) {
      DashboardApiService.instance = new DashboardApiService();
    }
    return DashboardApiService.instance;
  }
  
  /**
   * Get key performance indicators and metrics
   */
  async getMetrics(): Promise<MetricsApiResponse> {
    try {
      const url = getApiUrl(API_CONFIG.ENDPOINTS.DASHBOARD.METRICS);
      console.log('Fetching metrics from:', url);
      return await fetchWithRetry<MetricsApiResponse>(url);
    } catch (error) {
      console.error('Failed to fetch metrics:', error);
      throw error;
    }
  }
  
  /**
   * Get revenue trends and analytics data
   */
  async getRevenue(): Promise<RevenueApiResponse> {
    try {
      const url = getApiUrl(API_CONFIG.ENDPOINTS.DASHBOARD.REVENUE);
      console.log('Fetching revenue data from:', url);
      return await fetchWithRetry<RevenueApiResponse>(url);
    } catch (error) {
      console.error('Failed to fetch revenue data:', error);
      throw error;
    }
  }
  
  /**
   * Get customer satisfaction scores and trends
   */
  async getCustomerSatisfaction(): Promise<CustomerSatisfactionApiResponse> {
    try {
      const url = getApiUrl(API_CONFIG.ENDPOINTS.DASHBOARD.CUSTOMER_SATISFACTION);
      console.log('Fetching customer satisfaction data from:', url);
      return await fetchWithRetry<CustomerSatisfactionApiResponse>(url);
    } catch (error) {
      console.error('Failed to fetch customer satisfaction data:', error);
      throw error;
    }
  }
  
  /**
   * Get visitor analytics data including customer segmentation
   */
  async getVisitorInsights(): Promise<VisitorInsightsApiResponse> {
    try {
      const url = getApiUrl(API_CONFIG.ENDPOINTS.DASHBOARD.VISITOR_INSIGHTS);
      console.log('Fetching visitor insights from:', url);
      return await fetchWithRetry<VisitorInsightsApiResponse>(url);
    } catch (error) {
      console.error('Failed to fetch visitor insights:', error);
      throw error;
    }
  }
  
  /**
   * Get top performing products by popularity and sales
   */
  async getTopProducts(): Promise<TopProductsApiResponse> {
    try {
      const url = getApiUrl(API_CONFIG.ENDPOINTS.DASHBOARD.TOP_PRODUCTS);
      console.log('Fetching top products from:', url);
      return await fetchWithRetry<TopProductsApiResponse>(url);
    } catch (error) {
      console.error('Failed to fetch top products:', error);
      throw error;
    }
  }
  
  /**
   * Get all dashboard data in parallel
   */
  async getAllDashboardData() {
    try {
      console.log('Fetching all dashboard data in parallel...');
      const [metrics, revenue, customerSatisfaction, visitorInsights, topProducts] = await Promise.allSettled([
        this.getMetrics(),
        this.getRevenue(),
        this.getCustomerSatisfaction(),
        this.getVisitorInsights(),
        this.getTopProducts(),
      ]);
      
      return {
        metrics: metrics.status === 'fulfilled' ? metrics.value : null,
        revenue: revenue.status === 'fulfilled' ? revenue.value : null,
        customerSatisfaction: customerSatisfaction.status === 'fulfilled' ? customerSatisfaction.value : null,
        visitorInsights: visitorInsights.status === 'fulfilled' ? visitorInsights.value : null,
        topProducts: topProducts.status === 'fulfilled' ? topProducts.value : null,
        errors: {
          metrics: metrics.status === 'rejected' ? metrics.reason : null,
          revenue: revenue.status === 'rejected' ? revenue.reason : null,
          customerSatisfaction: customerSatisfaction.status === 'rejected' ? customerSatisfaction.reason : null,
          visitorInsights: visitorInsights.status === 'rejected' ? visitorInsights.reason : null,
          topProducts: topProducts.status === 'rejected' ? topProducts.reason : null,
        }
      };
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const dashboardApiService = DashboardApiService.getInstance();

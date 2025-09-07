/**
 * API Response Types
 * TypeScript interfaces for all API responses based on backend documentation
 */

// Base API Response wrapper
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Error Response
export interface ApiError {
  statusCode: number;
  message: string | string[];
  error: string;
}

// Dashboard API Response Types
export interface MetricsResponseDto {
  id: number;
  title: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

export interface RevenueResponseDto {
  day: string;
  onlineSales: number;
  offlineSales: number;
}

export interface CustomerSatisfactionResponseDto {
  month: string;
  lastMonth: number;
  thisMonth: number;
  createdAt: string;
}

export interface VisitorInsightsResponseDto {
  month: string;
  loyalCustomers: number;
  newCustomers: number;
  uniqueCustomers: number;
  createdAt: string;
}

export interface TopProductsResponseDto {
  id: number;
  name: string;
  popularity: number;
  sales: number;
}

// API Service Response Types
export type MetricsApiResponse = MetricsResponseDto[];
export type RevenueApiResponse = RevenueResponseDto[];
export type CustomerSatisfactionApiResponse = CustomerSatisfactionResponseDto[];
export type VisitorInsightsApiResponse = VisitorInsightsResponseDto[];
export type TopProductsApiResponse = TopProductsResponseDto[];

// Loading and Error States
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface ApiState<T> extends LoadingState {
  data: T | null;
  refetch: () => void;
}

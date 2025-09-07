/**
 * Custom React Hooks for Dashboard Data
 * Provides data fetching, loading states, and error handling for dashboard components
 */

import { useState, useEffect, useCallback } from 'react';
import { dashboardApiService } from '@/services/api';
import {
  MetricsApiResponse,
  RevenueApiResponse,
  CustomerSatisfactionApiResponse,
  VisitorInsightsApiResponse,
  TopProductsApiResponse,
  ApiState
} from '@/types/api';

/**
 * Generic hook for API data fetching with loading and error states
 */
function useApiData<T>(
  fetchFunction: () => Promise<T>,
  dependencies: any[] = []
): ApiState<T> {
  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const data = await fetchFunction();
      setState(prev => ({ ...prev, data, isLoading: false, error: null }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setState(prev => ({ ...prev, data: null, isLoading: false, error: errorMessage }));
      console.error('API fetch error:', error);
    }
  }, dependencies);

  const [state, setState] = useState<ApiState<T>>({
    data: null,
    isLoading: true,
    error: null,
    refetch: fetchData,
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return state;
}

/**
 * Hook for fetching metrics data
 */
export function useMetrics(): ApiState<MetricsApiResponse> {
  return useApiData(() => dashboardApiService.getMetrics());
}

/**
 * Hook for fetching revenue data
 */
export function useRevenue(): ApiState<RevenueApiResponse> {
  return useApiData(() => dashboardApiService.getRevenue());
}

/**
 * Hook for fetching customer satisfaction data
 */
export function useCustomerSatisfaction(): ApiState<CustomerSatisfactionApiResponse> {
  return useApiData(() => dashboardApiService.getCustomerSatisfaction());
}

/**
 * Hook for fetching visitor insights data
 */
export function useVisitorInsights(): ApiState<VisitorInsightsApiResponse> {
  return useApiData(() => dashboardApiService.getVisitorInsights());
}

/**
 * Hook for fetching top products data
 */
export function useTopProducts(): ApiState<TopProductsApiResponse> {
  return useApiData(() => dashboardApiService.getTopProducts());
}

/**
 * Hook for fetching all dashboard data at once
 */
export function useAllDashboardData() {
  const [state, setState] = useState<{
    data: any;
    isLoading: boolean;
    error: string | null;
  }>({
    data: null,
    isLoading: true,
    error: null,
  });

  const fetchAllData = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const data = await dashboardApiService.getAllDashboardData();
      setState({ data, isLoading: false, error: null });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setState({ data: null, isLoading: false, error: errorMessage });
      console.error('Failed to fetch all dashboard data:', error);
    }
  }, []);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  return { ...state, refetch: fetchAllData };
}

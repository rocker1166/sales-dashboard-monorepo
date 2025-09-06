import { Injectable, Logger } from "@nestjs/common"
import { SupabaseService } from "../supabase/supabase.service"
import type {
  MetricsResponseDto,
  RevenueResponseDto,
  CustomerSatisfactionResponseDto,
  VisitorInsightsResponseDto,
  TopProductsResponseDto,
} from "./dto/dashboard-response.dto"

@Injectable()
export class DashboardService {
  private readonly logger = new Logger(DashboardService.name)

  constructor(private readonly supabaseService: SupabaseService) {}

  async getMetrics(): Promise<MetricsResponseDto[]> {
    try {
      // For demo purposes, return mock data
      // In production, this would query the actual Supabase tables
      return [
        {
          id: 1,
          title: "Total Sales",
          value: "$1k",
          change: "+8% from yesterday",
          icon: "trending_up",
          color: "#FF6B9D",
        },
        {
          id: 2,
          title: "Total Order",
          value: "300",
          change: "+5% from yesterday",
          icon: "shopping_cart",
          color: "#FF8A56",
        },
        {
          id: 3,
          title: "Product Sold",
          value: "5",
          change: "+1.2% from yesterday",
          icon: "check_circle",
          color: "#10B981",
        },
        {
          id: 4,
          title: "New Customers",
          value: "8",
          change: "0.5% from yesterday",
          icon: "people",
          color: "#8B5CF6",
        },
      ]
    } catch (error) {
      this.logger.error("Failed to fetch metrics:", error)
      throw error
    }
  }

  async getRevenue(): Promise<RevenueResponseDto[]> {
    try {
      // Mock data for revenue by day
      return [
        { day: "Monday", onlineSales: 15000, offlineSales: 12000 },
        { day: "Tuesday", onlineSales: 18000, offlineSales: 15000 },
        { day: "Wednesday", onlineSales: 12000, offlineSales: 8000 },
        { day: "Thursday", onlineSales: 16000, offlineSales: 10000 },
        { day: "Friday", onlineSales: 14000, offlineSales: 16000 },
        { day: "Saturday", onlineSales: 20000, offlineSales: 18000 },
        { day: "Sunday", onlineSales: 22000, offlineSales: 14000 },
      ]
    } catch (error) {
      this.logger.error("Failed to fetch revenue data:", error)
      throw error
    }
  }

  async getCustomerSatisfaction(): Promise<CustomerSatisfactionResponseDto[]> {
    try {
      // Mock data for customer satisfaction
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      return months.map((month, index) => ({
        month,
        lastMonth: 3.0 + Math.random() * 0.6,
        thisMonth: 3.8 + Math.random() * 0.8,
        createdAt: new Date(),
      }))
    } catch (error) {
      this.logger.error("Failed to fetch customer satisfaction data:", error)
      throw error
    }
  }

  async getVisitorInsights(): Promise<VisitorInsightsResponseDto[]> {
    try {
      // Mock data for visitor insights
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      return months.map((month) => ({
        month,
        loyalCustomers: 200 + Math.floor(Math.random() * 150),
        newCustomers: 150 + Math.floor(Math.random() * 170),
        uniqueCustomers: 180 + Math.floor(Math.random() * 200),
        createdAt: new Date(),
      }))
    } catch (error) {
      this.logger.error("Failed to fetch visitor insights:", error)
      throw error
    }
  }

  async getTopProducts(): Promise<TopProductsResponseDto[]> {
    try {
      // Mock data for top products
      return [
        {
          id: 1,
          name: "Home Decor Range",
          popularity: 45,
          sales: 45,
          rank: 1,
        },
        {
          id: 2,
          name: "Disney Princess Pink Bag 18",
          popularity: 29,
          sales: 29,
          rank: 2,
        },
        {
          id: 3,
          name: "Bathroom Essentials",
          popularity: 18,
          sales: 18,
          rank: 3,
        },
        {
          id: 4,
          name: "Apple Smartwatches",
          popularity: 25,
          sales: 25,
          rank: 4,
        },
      ]
    } catch (error) {
      this.logger.error("Failed to fetch top products:", error)
      throw error
    }
  }
}

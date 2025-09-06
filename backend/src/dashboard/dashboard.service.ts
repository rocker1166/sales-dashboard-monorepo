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
      // Get real data from database
      const supabase = this.supabaseService.getClient()
      
      // Calculate date ranges for comparison
      const today = new Date()
      const yesterday = new Date(today)
      yesterday.setDate(yesterday.getDate() - 1)
      const twoDaysAgo = new Date(today)
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)
      
      // Get total sales (sum of all sales amounts)
      const { data: salesData } = await supabase
        .from('sales')
        .select('amount, sale_date')
      
      const totalSales = salesData?.reduce((sum, sale) => sum + parseFloat(sale.amount), 0) || 0
      const salesValue = totalSales >= 1000 ? `$${(totalSales / 1000).toFixed(1)}k` : `$${totalSales}`
      
      // Calculate sales change (yesterday vs day before)
      const yesterdaySales = salesData?.filter(sale => {
        const saleDate = new Date(sale.sale_date)
        return saleDate.toDateString() === yesterday.toDateString()
      }).reduce((sum, sale) => sum + parseFloat(sale.amount), 0) || 0
      
      const dayBeforeSales = salesData?.filter(sale => {
        const saleDate = new Date(sale.sale_date)
        return saleDate.toDateString() === twoDaysAgo.toDateString()
      }).reduce((sum, sale) => sum + parseFloat(sale.amount), 0) || 0
      
      const salesChange = dayBeforeSales > 0 ? 
        ((yesterdaySales - dayBeforeSales) / dayBeforeSales * 100).toFixed(1) : "0"
      const salesChangeText = parseFloat(salesChange) >= 0 ? 
        `+${salesChange}% from yesterday` : `${salesChange}% from yesterday`
      
      // Get total orders count
      const { count: totalOrders } = await supabase
        .from('orders')
        .select('*', { count: 'exact', head: true })
      
      // Calculate orders change
      const { count: yesterdayOrders } = await supabase
        .from('orders')
        .select('*', { count: 'exact', head: true })
        .gte('order_date', yesterday.toISOString().split('T')[0])
        .lt('order_date', today.toISOString().split('T')[0])
      
      const { count: dayBeforeOrders } = await supabase
        .from('orders')
        .select('*', { count: 'exact', head: true })
        .gte('order_date', twoDaysAgo.toISOString().split('T')[0])
        .lt('order_date', yesterday.toISOString().split('T')[0])
      
      const ordersChange = dayBeforeOrders && dayBeforeOrders > 0 ? 
        (((yesterdayOrders || 0) - dayBeforeOrders) / dayBeforeOrders * 100).toFixed(1) : "0"
      const ordersChangeText = parseFloat(ordersChange) >= 0 ? 
        `+${ordersChange}% from yesterday` : `${ordersChange}% from yesterday`
      
      // Get total products sold (sum of sales_count from products)
      const { data: productsData } = await supabase
        .from('products')
        .select('sales_count')
      
      const totalProductsSold = productsData?.reduce((sum, product) => sum + (product.sales_count || 0), 0) || 0
      
      // Calculate products sold change (simplified - using sales data)
      const yesterdayProductsSold = salesData?.filter(sale => {
        const saleDate = new Date(sale.sale_date)
        return saleDate.toDateString() === yesterday.toDateString()
      }).length || 0
      
      const dayBeforeProductsSold = salesData?.filter(sale => {
        const saleDate = new Date(sale.sale_date)
        return saleDate.toDateString() === twoDaysAgo.toDateString()
      }).length || 0
      
      const productsChange = dayBeforeProductsSold > 0 ? 
        ((yesterdayProductsSold - dayBeforeProductsSold) / dayBeforeProductsSold * 100).toFixed(1) : "0"
      const productsChangeText = parseFloat(productsChange) >= 0 ? 
        `+${productsChange}% from yesterday` : `${productsChange}% from yesterday`
      
      // Get new customers (users created in last 30 days)
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
      
      const { count: newCustomers } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', thirtyDaysAgo.toISOString())
      
      // Calculate new customers change (yesterday vs day before)
      const { count: yesterdayNewCustomers } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', yesterday.toISOString().split('T')[0])
        .lt('created_at', today.toISOString().split('T')[0])
      
      const { count: dayBeforeNewCustomers } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', twoDaysAgo.toISOString().split('T')[0])
        .lt('created_at', yesterday.toISOString().split('T')[0])
      
      const customersChange = dayBeforeNewCustomers && dayBeforeNewCustomers > 0 ? 
        (((yesterdayNewCustomers || 0) - dayBeforeNewCustomers) / dayBeforeNewCustomers * 100).toFixed(1) : "0"
      const customersChangeText = parseFloat(customersChange) >= 0 ? 
        `+${customersChange}% from yesterday` : `${customersChange}% from yesterday`
      
      return [
        {
          id: 1,
          title: "Total Sales",
          value: salesValue,
          change: salesChangeText,
          icon: "trending_up",
          color: "#FF6B9D",
        },
        {
          id: 2,
          title: "Total Order",
          value: totalOrders?.toString() || "0",
          change: ordersChangeText,
          icon: "shopping_cart",
          color: "#FF8A56",
        },
        {
          id: 3,
          title: "Product Sold",
          value: totalProductsSold.toString(),
          change: productsChangeText,
          icon: "check_circle",
          color: "#10B981",
        },
        {
          id: 4,
          title: "New Customers",
          value: newCustomers?.toString() || "0",
          change: customersChangeText,
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
      // Get real revenue data from database
      const supabase = this.supabaseService.getClient()
      
      const { data: revenueData } = await supabase
        .from('revenue_analytics')
        .select('day_of_week, online_sales, offline_sales')
        .order('date', { ascending: true })
      
      if (!revenueData || revenueData.length === 0) {
        // Fallback to empty data if no records found
        return []
      }
      
      return revenueData.map(item => ({
        day: item.day_of_week,
        onlineSales: item.online_sales,
        offlineSales: item.offline_sales,
      }))
    } catch (error) {
      this.logger.error("Failed to fetch revenue data:", error)
      throw error
    }
  }

  async getCustomerSatisfaction(): Promise<CustomerSatisfactionResponseDto[]> {
    try {
      // Get real customer satisfaction data from database
      const supabase = this.supabaseService.getClient()
      
      const { data: satisfactionData } = await supabase
        .from('customer_satisfaction')
        .select('id, customer_id, rating, feedback, survey_date, created_at')
        .order('survey_date', { ascending: true })
      
      if (!satisfactionData || satisfactionData.length === 0) {
        return []
      }
      
      // Return individual customer satisfaction records with all fields
      return satisfactionData.map((item, index) => {
        const date = new Date(item.survey_date)
        const monthKey = date.toLocaleDateString('en-US', { month: 'short' })
        
        // Calculate a simulated previous month rating (slightly lower)
        const lastMonthRating = Math.max(1, item.rating - 0.5)
        
        return {
          id: item.id,
          customerId: item.customer_id,
          rating: item.rating,
          feedback: item.feedback || '',
          surveyDate: date,
          createdAt: new Date(item.created_at),
          month: monthKey,
          lastMonth: Math.round(lastMonthRating * 20), // Convert to 100-point scale
          thisMonth: Math.round(item.rating * 20), // Convert to 100-point scale
        }
      })
    } catch (error) {
      this.logger.error("Failed to fetch customer satisfaction data:", error)
      throw error
    }
  }

  async getVisitorInsights(): Promise<VisitorInsightsResponseDto[]> {
    try {
      // Get real visitor insights data from database
      const supabase = this.supabaseService.getClient()
      
      const { data: visitorData } = await supabase
        .from('visitor_analytics')
        .select('date, loyal_customers, new_customers, unique_customers')
        .order('date', { ascending: true })
      
      if (!visitorData || visitorData.length === 0) {
        return []
      }
      
      return visitorData.map(item => ({
        month: new Date(item.date).toLocaleDateString('en-US', { month: 'short' }),
        loyalCustomers: item.loyal_customers,
        newCustomers: item.new_customers,
        uniqueCustomers: item.unique_customers,
        createdAt: item.date,
      }))
    } catch (error) {
      this.logger.error("Failed to fetch visitor insights:", error)
      throw error
    }
  }

  async getTopProducts(): Promise<TopProductsResponseDto[]> {
    try {
      // Get real top products data from database
      const supabase = this.supabaseService.getClient()
      
      const { data: productsData } = await supabase
        .from('products')
        .select('id, name, popularity_score, sales_count')
        .order('popularity_score', { ascending: false })
        .limit(10)
      
      if (!productsData || productsData.length === 0) {
        return []
      }
      
      return productsData.map((product, index) => ({
        id: product.id,
        name: product.name,
        popularity: product.popularity_score,
        sales: product.sales_count,
        rank: index + 1,
      }))
    } catch (error) {
      this.logger.error("Failed to fetch top products:", error)
      throw error
    }
  }
}

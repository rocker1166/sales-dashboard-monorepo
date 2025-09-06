import { Controller, Get, Logger } from "@nestjs/common"
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger"
import { DashboardService } from "./dashboard.service"
import {
  MetricsResponseDto,
  RevenueResponseDto,
  CustomerSatisfactionResponseDto,
  VisitorInsightsResponseDto,
  TopProductsResponseDto,
} from "./dto/dashboard-response.dto"

@ApiTags("dashboard")
@Controller("dashboard")
export class DashboardController {
  private readonly logger = new Logger(DashboardController.name)

  constructor(private readonly dashboardService: DashboardService) {}

  @Get("metrics")
  @ApiOperation({ summary: "Get key performance indicators" })
  @ApiResponse({ status: 200, description: "Returns KPI metrics", type: [MetricsResponseDto] })
  async getMetrics(): Promise<MetricsResponseDto[]> {
    this.logger.log("Fetching dashboard metrics")
    return this.dashboardService.getMetrics()
  }

  @Get("revenue")
  @ApiOperation({ summary: "Get revenue trends and analytics" })
  @ApiResponse({ status: 200, description: "Returns revenue data", type: [RevenueResponseDto] })
  async getRevenue(): Promise<RevenueResponseDto[]> {
    this.logger.log("Fetching revenue data")
    return this.dashboardService.getRevenue()
  }

  @Get("customer-satisfaction")
  @ApiOperation({ summary: "Get customer satisfaction scores" })
  @ApiResponse({ status: 200, description: "Returns satisfaction data", type: [CustomerSatisfactionResponseDto] })
  async getCustomerSatisfaction(): Promise<CustomerSatisfactionResponseDto[]> {
    this.logger.log("Fetching customer satisfaction data")
    return this.dashboardService.getCustomerSatisfaction()
  }

  @Get("visitor-insights")
  @ApiOperation({ summary: "Get visitor analytics data" })
  @ApiResponse({ status: 200, description: "Returns visitor insights", type: [VisitorInsightsResponseDto] })
  async getVisitorInsights(): Promise<VisitorInsightsResponseDto[]> {
    this.logger.log("Fetching visitor insights")
    return this.dashboardService.getVisitorInsights()
  }

  @Get("top-products")
  @ApiOperation({ summary: "Get top performing products" })
  @ApiResponse({ status: 200, description: "Returns top products", type: [TopProductsResponseDto] })
  async getTopProducts(): Promise<TopProductsResponseDto[]> {
    this.logger.log("Fetching top products")
    return this.dashboardService.getTopProducts()
  }
}

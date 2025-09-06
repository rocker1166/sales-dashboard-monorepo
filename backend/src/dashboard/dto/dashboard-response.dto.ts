import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNumber, IsDate } from "class-validator"

export class MetricsResponseDto {
  @ApiProperty({ description: "Metric ID" })
  @IsNumber()
  id: number

  @ApiProperty({ description: "Metric title" })
  @IsString()
  title: string

  @ApiProperty({ description: "Metric value" })
  @IsString()
  value: string

  @ApiProperty({ description: "Change from previous period" })
  @IsString()
  change: string

  @ApiProperty({ description: "Icon name" })
  @IsString()
  icon: string

  @ApiProperty({ description: "Color code" })
  @IsString()
  color: string
}

export class RevenueResponseDto {
  @ApiProperty({ description: "Day of the week" })
  @IsString()
  day: string

  @ApiProperty({ description: "Online sales amount" })
  @IsNumber()
  onlineSales: number

  @ApiProperty({ description: "Offline sales amount" })
  @IsNumber()
  offlineSales: number
}

export class CustomerSatisfactionResponseDto {
  @ApiProperty({ description: "Satisfaction record ID" })
  @IsNumber()
  id: number

  @ApiProperty({ description: "Customer ID" })
  @IsString()
  customerId: string

  @ApiProperty({ description: "Rating (1-5)" })
  @IsNumber()
  rating: number

  @ApiProperty({ description: "Customer feedback" })
  @IsString()
  feedback: string

  @ApiProperty({ description: "Survey date" })
  @IsDate()
  surveyDate: Date

  @ApiProperty({ description: "Record creation date" })
  @IsDate()
  createdAt: Date

  @ApiProperty({ description: "Month of survey" })
  @IsString()
  month: string

  @ApiProperty({ description: "Last month satisfaction score" })
  @IsNumber()
  lastMonth: number

  @ApiProperty({ description: "This month satisfaction score" })
  @IsNumber()
  thisMonth: number
}

export class VisitorInsightsResponseDto {
  @ApiProperty({ description: "Month" })
  @IsString()
  month: string

  @ApiProperty({ description: "Number of loyal customers" })
  @IsNumber()
  loyalCustomers: number

  @ApiProperty({ description: "Number of new customers" })
  @IsNumber()
  newCustomers: number

  @ApiProperty({ description: "Number of unique customers" })
  @IsNumber()
  uniqueCustomers: number

  @ApiProperty({ description: "Record creation date" })
  @IsDate()
  createdAt: Date
}

export class TopProductsResponseDto {
  @ApiProperty({ description: "Product ID" })
  @IsNumber()
  id: number

  @ApiProperty({ description: "Product name" })
  @IsString()
  name: string

  @ApiProperty({ description: "Popularity percentage" })
  @IsNumber()
  popularity: number

  @ApiProperty({ description: "Sales percentage" })
  @IsNumber()
  sales: number

  @ApiProperty({ description: "Product rank" })
  @IsNumber()
  rank: number
}

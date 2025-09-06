"use client"
import { Grid, Box } from "@mui/material"
import MetricsCards from "./MetricsCards"
import VisitorInsights from "./VisitorInsights"
import TotalRevenue from "./TotalRevenue"
import CustomerSatisfaction from "./CustomerSatisfaction"
import TargetVsReality from "./TargetVsReality"
import TopProducts from "./TopProducts"
import SalesMapping from "./SalesMapping"
import VolumeVsService from "./VolumeVsService"

export default function DashboardContent() {
  return (
    <Box sx={{ 
      flexGrow: 1, 
      padding: "24px",
      maxWidth: "1920px",
      margin: "0 auto"
    }}>
      {/* Top Section */}
      <Box sx={{ marginBottom: "24px" }}>
        <Grid container spacing={3}>
          {/* Metrics Cards - Left side */}
          <Grid item xs={12} lg={6}>
            <MetricsCards />
          </Grid>
          {/* Visitor Insights - Right side */}
          <Grid item xs={12} lg={6}>
            <VisitorInsights />
          </Grid>
        </Grid>
      </Box>

      {/* Middle Section */}
      <Box sx={{ marginBottom: "24px" }}>
        <Grid container spacing={3}>
          {/* Total Revenue - Left */}
          <Grid item xs={12} lg={4}>
            <TotalRevenue />
          </Grid>
          {/* Customer Satisfaction - Center */}
          <Grid item xs={12} lg={4}>
            <CustomerSatisfaction />
          </Grid>
          {/* Target vs Reality - Right */}
          <Grid item xs={12} lg={4}>
            <TargetVsReality />
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Section */}
      <Box>
        <Grid container spacing={3}>
          {/* Top Products - Left */}
          <Grid item xs={12} lg={4}>
            <TopProducts />
          </Grid>
          {/* Sales Mapping - Center */}
          <Grid item xs={12} lg={4}>
            <SalesMapping />
          </Grid>
          {/* Volume vs Service - Right */}
          <Grid item xs={12} lg={4}>
            <VolumeVsService />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

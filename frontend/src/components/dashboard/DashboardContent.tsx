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
        <Box sx={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {/* Total Revenue - 645px at 1920px, responsive for other screens */}
          <Box sx={{ 
            width: { 
              xs: "100%", 
              sm: "100%", 
              md: "60%", 
              lg: "55%", 
              xl: "645px" 
            } 
          }}>
            <TotalRevenue />
          </Box>
          {/* Customer Satisfaction & Target vs Reality - Equal remaining space */}
          <Box sx={{ 
            display: "flex", 
            gap: "24px", 
            flex: 1,
            minWidth: 0,
            flexDirection: { xs: "column", md: "row" }
          }}>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <CustomerSatisfaction />
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <TargetVsReality />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box>
        <Box sx={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {/* Top Products - 645px at 1920px, responsive for other screens */}
          <Box sx={{ 
            width: { 
              xs: "100%", 
              sm: "100%", 
              md: "60%", 
              lg: "55%", 
              xl: "645px" 
            } 
          }}>
            <TopProducts />
          </Box>
          {/* Sales Mapping & Volume vs Service - Equal remaining space */}
          <Box sx={{ 
            display: "flex", 
            gap: "24px", 
            flex: 1,
            minWidth: 0,
            flexDirection: { xs: "column", md: "row" }
          }}>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <SalesMapping />
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <VolumeVsService />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

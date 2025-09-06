"use client"
import { Grid, Card, CardContent, Typography, Box, Button } from "@mui/material"
import { BarChart, ShoppingCart, CheckCircle, People, FileDownload } from "@mui/icons-material"

const metrics = [
  {
    title: "Total Sales",
    value: "$1k",
    change: "+8% from yesterday",
    icon: <BarChart sx={{ fontSize: 24 }} />,
    iconColor: "#FA5A7D",
    bgColor: "#FFE2E5",
  },
  {
    title: "Total Order",
    value: "300",
    change: "+5% from yesterday",
    icon: <ShoppingCart sx={{ fontSize: 24 }} />,
    iconColor: "#FF8A56",
    bgColor: "#FFF3E8",
  },
  {
    title: "Product Sold",
    value: "5",
    change: "+1,2% from yesterday",
    icon: <CheckCircle sx={{ fontSize: 24 }} />,
    iconColor: "#10B981",
    bgColor: "#E8F8F5",
  },
  {
    title: "New Customers",
    value: "8",
    change: "0,5% from yesterday",
    icon: <People sx={{ fontSize: 24 }} />,
    iconColor: "#8B5CF6",
    bgColor: "#F3E8FF",
  },
]

export default function MetricsCards() {
  return (
    <Box sx={{ 
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "24px",
      border: "1px solid #E2E8F0",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      height: "348px",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <Box sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "flex-start", 
        mb: 3
      }}>
        <Box>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 700, 
              mb: 0.5,
              color: "#1E293B",
              fontSize: "20px",
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            Today's Sales
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: "#64748B",
              fontSize: "14px",
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            Sales Summary
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<FileDownload sx={{ fontSize: 16 }} />}
          sx={{
            borderColor: "#D1D5DB",
            color: "#6B7280",
            textTransform: "none",
            fontWeight: 500,
            fontSize: "14px",
            borderRadius: "8px",
            padding: "8px 16px",
            fontFamily: "'Poppins', sans-serif",
            "&:hover": {
              borderColor: "#9CA3AF",
              backgroundColor: "#F9FAFB"
            }
          }}
        >
          Export
        </Button>
      </Box>

      {/* Metrics Grid */}
      <Box sx={{ flex: 1 }}>
        <Grid container spacing={2}>
          {metrics.map((metric, index) => (
            <Grid item xs={6} lg={3} key={index}>
              <Card
                sx={{
                  backgroundColor: metric.bgColor,
                  borderRadius: "16px",
                  border: "none",
                  boxShadow: "none",
                  width: "180px",
                  height: "184px",
                  position: "relative"
                }}
              >
                <CardContent sx={{ 
                  p: 0,
                  "&:last-child": { pb: 0 },
                  height: "100%",
                  position: "relative"
                }}>
                  {/* Icon Circle */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "40px",
                      height: "40px",
                      left: "20px",
                      top: "20px",
                      borderRadius: "50%",
                      backgroundColor: metric.iconColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    {metric.icon}
                  </Box>

                  {/* Value */}
                  <Typography 
                    sx={{ 
                      position: "absolute",
                      left: "20px",
                      top: "76px",
                      fontFamily: "'Poppins', sans-serif",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: "#151D48",
                      margin: 0
                    }}
                  >
                    {metric.value}
                  </Typography>

                  {/* Title */}
                  <Typography 
                    sx={{ 
                      position: "absolute",
                      left: "20px",
                      top: "116px",
                      fontFamily: "'Poppins', sans-serif",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#425166",
                      margin: 0
                    }}
                  >
                    {metric.title}
                  </Typography>

                  {/* Change Percentage */}
                  <Typography 
                    sx={{ 
                      position: "absolute",
                      left: "20px",
                      top: "148px",
                      fontFamily: "'Poppins', sans-serif",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "#4079ED",
                      margin: 0
                    }}
                  >
                    {metric.change}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

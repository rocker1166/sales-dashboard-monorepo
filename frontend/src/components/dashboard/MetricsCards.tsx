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
      padding: { xs: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" },
      border: "1px solid #F8F9FA",
      boxShadow: "0px 4px 20px 0px rgba(238, 238, 238, 0.5)",
      minHeight: { xs: "280px", sm: "320px", md: "348px" },
      display: "flex",
      flexDirection: "column",
      width: "100%",
      position: "relative"
    }}>
      {/* Header */}
      <Box sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: { xs: "flex-start", sm: "center" },
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: "12px", sm: "0" },
        mb: { xs: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" }
      }}>
        <Box>
          <Typography 
            sx={{ 
              fontWeight: 600, 
              mb: "4px",
              color: "#05004E",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              lineHeight: { xs: "24px", sm: "28px", md: "32px" },
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            Today's Sales
          </Typography>
          <Typography 
            sx={{ 
              color: "#737791",
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              lineHeight: { xs: "18px", sm: "24px", md: "30px" },
              fontWeight: 400,
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            Sales Summary
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<FileDownload sx={{ fontSize: { xs: "10px", sm: "12px", md: "13.33px" } }} />}
          sx={{
            borderColor: "#C3D3E2",
            color: "#0F3659",
            textTransform: "none",
            fontWeight: 500,
            fontSize: { xs: "10px", sm: "12px", md: "14px" },
            lineHeight: { xs: "16px", sm: "18px", md: "20px" },
            borderRadius: "8px",
            padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px" },
            height: { xs: "28px", sm: "32px", md: "40px" },
            width: { xs: "60px", sm: "80px", md: "100px" },
            fontFamily: "'Poppins', sans-serif",
            alignSelf: { xs: "flex-start", sm: "auto" },
            "&:hover": {
              borderColor: "#A8B8C8",
              backgroundColor: "#F8F9FA"
            }
          }}
        >
          Export
        </Button>
      </Box>

      {/* Metrics Grid - Always within container */}
      <Box sx={{ 
        display: "grid",
        gridTemplateColumns: { 
          xs: "1fr", 
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)"
        },
        gap: { 
          xs: "8px", 
          sm: "12px", 
          md: "16px", 
          lg: "20px", 
          xl: "32px" 
        },
        width: "100%",
        flex: 1,
        alignItems: "start"
      }}>
        {metrics.map((metric, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: metric.bgColor,
              borderRadius: { xs: "12px", sm: "14px", md: "16px" },
              border: "none",
              boxShadow: "none",
              width: "100%",
              height: { 
                xs: "120px", 
                sm: "140px", 
                md: "170px", 
                lg: "180px", 
                xl: "184px" 
              },
              position: "relative",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <CardContent sx={{ 
              p: 0,
              "&:last-child": { pb: 0 },
              height: "100%",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              {/* Icon Circle */}
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: "24px", sm: "28px", md: "32px", lg: "36px", xl: "40px" },
                  height: { xs: "24px", sm: "28px", md: "32px", lg: "36px", xl: "40px" },
                  left: { xs: "12px", sm: "14px", md: "16px", lg: "18px", xl: "20px" },
                  top: { xs: "12px", sm: "14px", md: "16px", lg: "18px", xl: "20px" },
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
                  left: { xs: "12px", sm: "14px", md: "16px", lg: "18px", xl: "20px" },
                  top: { xs: "44px", sm: "52px", md: "64px", lg: "72px", xl: "76px" },
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px", xl: "24px" },
                  lineHeight: { xs: "22px", sm: "24px", md: "26px", lg: "28px", xl: "32px" },
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
                  left: { xs: "12px", sm: "14px", md: "16px", lg: "18px", xl: "20px" },
                  top: { xs: "68px", sm: "78px", md: "96px", lg: "104px", xl: "116px" },
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: { xs: "10px", sm: "12px", md: "14px", lg: "15px", xl: "16px" },
                  lineHeight: { xs: "14px", sm: "16px", md: "18px", lg: "20px", xl: "24px" },
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
                  left: { xs: "12px", sm: "14px", md: "16px", lg: "18px", xl: "20px" },
                  top: { xs: "84px", sm: "96px", md: "120px", lg: "132px", xl: "148px" },
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: { xs: "8px", sm: "9px", md: "10px", lg: "11px", xl: "12px" },
                  lineHeight: { xs: "10px", sm: "12px", md: "14px", lg: "15px", xl: "16px" },
                  color: "#4079ED",
                  margin: 0
                }}
              >
                {metric.change}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

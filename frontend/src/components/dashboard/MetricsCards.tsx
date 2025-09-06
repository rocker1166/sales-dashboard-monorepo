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
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#FF947A"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C12 11.7909 13.7909 10 16 10H22V14C22 16.2091 23.7909 18 26 18H28V26C28 28.2091 26.2091 30 24 30H16C13.7909 30 12 28.2091 12 26V14ZM16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21H18C18.5523 21 19 20.5523 19 20C19 19.4477 18.5523 19 18 19H16ZM16 23C15.4477 23 15 23.4477 15 24C15 24.5523 15.4477 25 16 25H20C20.5523 25 21 24.5523 21 24C21 23.4477 20.5523 23 20 23H16ZM24.6818 12.1988L24.5509 14.1629C24.5106 14.7666 25.0115 15.2674 25.6152 15.2272L27.5792 15.0962C28.4365 15.0391 28.8274 13.9989 28.2198 13.3913L26.3867 11.5582C25.7792 10.9507 24.7389 11.3415 24.6818 12.1988Z" fill="white"/>
    </svg>
    ,
    iconColor: "#FF8A56",
    bgColor: "#FFF3E8",
  },
  {
    title: "Product Sold",
    value: "5",
    change: "+1,2% from yesterday",
    icon:<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#3CD856"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6261 13.2653L21.3263 13.7367C20.8222 13.8087 20.4103 14.049 20.1162 14.3811L12.4167 22.0806C11.6357 22.8616 11.6357 24.1279 12.4167 24.909L15.2452 27.7374C16.0263 28.5185 17.2925 28.5185 18.0736 27.7374L25.773 20.038C26.1051 19.7439 26.3454 19.332 26.4174 18.8279L26.8888 15.528C27.0775 14.2081 25.946 13.0767 24.6261 13.2653ZM22.3162 17.8379C22.7067 18.2284 23.3399 18.2285 23.7305 17.8379C24.121 17.4474 24.1209 16.8142 23.7305 16.4237C23.34 16.0332 22.7068 16.0332 22.3162 16.4237C21.9257 16.8142 21.9257 17.4474 22.3162 17.8379Z" fill="white"/>
    </svg>
    ,
    iconColor: "#10B981",
    bgColor: "#E8F8F5",
  },
  {
    title: "New Customers",
    value: "8",
    change: "0,5% from yesterday",
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#BF83FF"/>
    <path d="M18 21C21.866 21 25 23.2386 25 26C25 27.1046 24.1046 28 23 28H13C11.8954 28 11 27.1046 11 26C11 23.2386 14.134 21 18 21ZM18 12C20.2091 12 22 13.7909 22 16C22 18.2091 20.2091 20 18 20C15.7909 20 14 18.2091 14 16C14 13.7909 15.7909 12 18 12ZM26 14C26.5523 14 27 14.4477 27 15V16H28C28.5523 16 29 16.4477 29 17C29 17.5523 28.5523 18 28 18H27V19C27 19.5523 26.5523 20 26 20C25.4477 20 25 19.5523 25 19V18H24C23.4477 18 23 17.5523 23 17C23 16.4477 23.4477 16 24 16H25V15C25 14.4477 25.4477 14 26 14Z" fill="white"/>
    </svg>
    ,
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

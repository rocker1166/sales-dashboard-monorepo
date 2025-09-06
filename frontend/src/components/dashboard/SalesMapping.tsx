"use client"
import { Card, CardContent, Typography, Box } from "@mui/material"

export default function SalesMapping() {
  return (
    <Card sx={{ 
      height: "351px", 
      borderRadius: "20px", 
      border: "1px solid #F8F9FA",
      backgroundColor: "white",
      boxShadow: "0px 4px 20px 0px rgba(238, 238, 238, 0.5)"
    }}>
      <CardContent sx={{ 
        p: "24px", 
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700, 
            mb: 3,
            color: "#1E293B",
            fontSize: "20px",
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          Sales Mapping by Country
        </Typography>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F8FAFC",
            borderRadius: 2,
            position: "relative",
          }}
        >
          {/* World Map Placeholder */}
          <Box
            component="img"
            src="/ind.jpg"
            alt="World Sales Map"
            sx={{
              width: "750px",
              height: "259px",
              objectFit: "cover",
            }}
          />

          {/* Sample Data Points */}
          <Box
            sx={{
              position: "absolute",
              top: "30%",
              left: "20%",
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#FF6B9D",
              animation: "pulse 2s infinite",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              right: "25%",
              width: 16,
              height: 16,
              borderRadius: "50%",
              backgroundColor: "#10B981",
              animation: "pulse 2s infinite",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "35%",
              left: "30%",
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#3B82F6",
              animation: "pulse 2s infinite",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

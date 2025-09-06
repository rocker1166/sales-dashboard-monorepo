"use client"
import { Card, CardContent, Typography, Box, LinearProgress } from "@mui/material"

const products = [
  { id: "01", name: "Home Decor Range", popularity: 45, sales: "45%", color: "#3B82F6", bgColor: "#F0F9FF" },
  { id: "02", name: "Disney Princess Pink Bag 18", popularity: 29, sales: "29%", color: "#10B981", bgColor: "#F0FDF4" },
  { id: "03", name: "Bathroom Essentials", popularity: 18, sales: "18%", color: "#8B5CF6", bgColor: "#F3E8FF" },
  { id: "04", name: "Apple Smartwatches", popularity: 25, sales: "25%", color: "#F59E0B", bgColor: "#FEF3E6" },
]

export default function TopProducts() {
  return (
    <Card sx={{ 
      height: "351px", 
      borderRadius: "20px", 
      border: "1px solid #F8F9FA",
      backgroundColor: "white",
      boxShadow: "0px 4px 20px 0px rgba(238, 238, 238, 0.5)",
      width: "100%"
    }}>
      <CardContent sx={{ 
        p: { xs: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" }, 
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}>
        <Typography 
          sx={{ 
            fontWeight: 600, 
            mb: { xs: "12px", sm: "16px", md: "20px" },
            color: "#05004E",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            lineHeight: { xs: "24px", sm: "28px", md: "32px" },
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          Top Products
        </Typography>

        {/* Table Header */}
        <Box sx={{ 
          display: "flex", 
          mb: { xs: "12px", sm: "16px", md: "20px" }, 
          pb: { xs: "8px", sm: "12px" }, 
          borderBottom: "1px solid #F1F5F9" 
        }}>
          <Typography 
            sx={{ 
              width: "10%", 
              fontWeight: 600,
              fontSize: { xs: "11px", sm: "12px" },
              color: "#737791",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: "16px"
            }}
          >
            #
          </Typography>
          <Typography 
            sx={{ 
              width: "50%", 
              fontWeight: 600,
              fontSize: { xs: "11px", sm: "12px" },
              color: "#737791",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: "16px"
            }}
          >
            Name
          </Typography>
          <Typography 
            sx={{ 
              width: "25%", 
              fontWeight: 600,
              fontSize: { xs: "11px", sm: "12px" },
              color: "#737791",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: "16px"
            }}
          >
            Popularity
          </Typography>
          <Typography 
            sx={{ 
              width: "15%", 
              fontWeight: 600,
              fontSize: { xs: "11px", sm: "12px" },
              color: "#737791",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: "16px"
            }}
          >
            Sales
          </Typography>
        </Box>

        {/* Product List */}
        <Box sx={{ flex: 1 }}>
          {products.map((product, index) => (
            <Box key={product.id} sx={{ 
              display: "flex", 
              alignItems: "center", 
              mb: { xs: "12px", sm: "16px", md: "20px" },
              py: { xs: "4px", sm: "6px" }
            }}>
              <Typography 
                sx={{ 
                  width: "10%", 
                  fontWeight: 600,
                  fontSize: { xs: "12px", sm: "14px" },
                  color: "#05004E",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "20px"
                }}
              >
                {product.id}
              </Typography>
              <Typography 
                sx={{ 
                  width: "50%", 
                  fontWeight: 500,
                  fontSize: { xs: "12px", sm: "14px" },
                  color: "#05004E",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "20px"
                }}
              >
                {product.name}
              </Typography>
              <Box sx={{ width: "25%", pr: { xs: "8px", sm: "12px" } }}>
                <LinearProgress
                  variant="determinate"
                  value={product.popularity}
                  sx={{
                    height: { xs: 4, sm: 6 },
                    borderRadius: { xs: 2, sm: 3 },
                    backgroundColor: "#F1F5F9",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: product.color,
                      borderRadius: { xs: 2, sm: 3 },
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "15%",
                  backgroundColor: product.bgColor,
                  color: product.color,
                  border: `1px solid ${product.color}`,
                  borderRadius: { xs: "4px", sm: "6px" },
                  px: { xs: "6px", sm: "8px" },
                  py: { xs: "2px", sm: "4px" },
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: { xs: "20px", sm: "24px" }
                }}
              >
                <Typography sx={{ 
                  fontWeight: 600,
                  fontSize: { xs: "10px", sm: "12px" },
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "16px",
                  color: product.color
                }}>
                  {product.sales}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

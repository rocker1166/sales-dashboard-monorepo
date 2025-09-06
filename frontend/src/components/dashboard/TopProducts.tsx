"use client"
import { Card, CardContent, Typography, Box, LinearProgress } from "@mui/material"

const products = [
  { id: "01", name: "Home Decor Range", popularity: 45, sales: "45%", color: "#3B82F6" },
  { id: "02", name: "Disney Princess Pink Bag 18", popularity: 29, sales: "29%", color: "#10B981" },
  { id: "03", name: "Bathroom Essentials", popularity: 18, sales: "18%", color: "#8B5CF6" },
  { id: "04", name: "Apple Smartwatches", popularity: 25, sales: "25%", color: "#F59E0B" },
]

export default function TopProducts() {
  return (
    <Card sx={{ 
      height: "351px", 
      borderRadius: "20px", 
      border: "1px solid #E2E8F0",
      backgroundColor: "white",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
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
          Top Products
        </Typography>

        {/* Table Header */}
        <Box sx={{ display: "flex", mb: 2, pb: 1, borderBottom: "1px solid #E2E8F0" }}>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              width: "10%", 
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            #
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              width: "50%", 
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            Name
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              width: "25%", 
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            Popularity
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              width: "15%", 
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            Sales
          </Typography>
        </Box>

        {/* Product List */}
        <Box sx={{ flex: 1 }}>
          {products.map((product) => (
            <Box key={product.id} sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  width: "10%", 
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                {product.id}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  width: "50%", 
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                {product.name}
              </Typography>
              <Box sx={{ width: "25%", pr: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={product.popularity}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "#E2E8F0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: product.color,
                      borderRadius: 3,
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "15%",
                  backgroundColor: product.color,
                  color: "white",
                  borderRadius: 1,
                  px: 1,
                  py: 0.5,
                  textAlign: "center",
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
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

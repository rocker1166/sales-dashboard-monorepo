"use client"
import { Box, Typography, Button } from "@mui/material"

export default function GetProButton() {
  return (
    <Box sx={{
      position: "relative",
      width: "238px",
      height: "259px",
      borderRadius: "20px",
      background: "linear-gradient(135deg, #5D5FEF 0%, #E36867 100%)",
      overflow: "hidden"
    }}>
      {/* Background decorative elements */}
      <Box sx={{
        position: "absolute",
        top: "-142px",
        right: "-104px",
        width: "242px",
        height: "242px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.1)",
        zIndex: 1
      }} />
      <Box sx={{
        position: "absolute",
        bottom: "-144px",
        left: "-68px",
        width: "306px",
        height: "303px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.05)",
        zIndex: 1
      }} />
      
      {/* Content */}
      <Box sx={{
        position: "absolute",
        top: "31.5px",
        left: "47px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        zIndex: 2
      }}>
        {/* Title Section */}
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          width: "145px"
        }}>
          {/* Logo */}
          <Box sx={{
            width: "48px",
            height: "48px",
            backgroundColor: "white",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Box sx={{
              width: "24.644px",
              height: "24.634px",
              backgroundColor: "#5D5FEF",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Typography sx={{
                fontSize: "12px",
                fontWeight: 600,
                color: "white",
                fontFamily: "'Poppins', sans-serif"
              }}>
                D
              </Typography>
            </Box>
          </Box>
          
          {/* Title */}
          <Typography sx={{
            fontSize: "20px",
            fontWeight: 600,
            color: "white",
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "32px",
            textAlign: "center"
          }}>
            Dabang Pro
          </Typography>
          
          {/* Subtitle */}
          <Typography sx={{
            fontSize: "12px",
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.8)",
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "16px",
            textAlign: "center",
            width: "145px"
          }}>
            Get access to all features on tetumbas
          </Typography>
        </Box>
        
        {/* Button */}
        <Button
          sx={{
            width: "136px",
            height: "40px",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.9)"
            }
          }}
        >
          <Typography sx={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#5D5FEF",
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "24px"
          }}>
            Get Pro
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

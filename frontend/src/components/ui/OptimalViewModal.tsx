"use client"
import { useState, useEffect } from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import {
  Close as CloseIcon,
  CheckCircle as CheckIcon,
} from "@mui/icons-material"

const STORAGE_KEY = "optimal-view-modal-shown"

export default function OptimalViewModal() {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isOptimalDesktop = useMediaQuery("(min-width: 1920px)")
  const isOptimalMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    // Check if modal has been shown before
    const hasShownModal = localStorage.getItem(STORAGE_KEY)
    
    if (!hasShownModal) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setOpen(true)
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setOpen(false)
    // Mark modal as shown in localStorage
    localStorage.setItem(STORAGE_KEY, "true")
  }

  const getCurrentScreenInfo = () => {
    if (isOptimalDesktop) {
      return {
        type: "desktop",
        icon: "🖥️",
        title: "Optimal Desktop View",
        description: "You're using the recommended 1920px+ screen resolution for the best dashboard experience. The dashboard is also fully mobile responsive for optimal viewing on all devices.",
        color: "#10B981",
        bgColor: "#F0FDF4"
      }
    } else if (isOptimalMobile) {
      return {
        type: "mobile",
        icon: "📱",
        title: "Optimal Mobile View",
        description: "You're using the recommended mobile screen size for the best dashboard experience.",
        color: "#3B82F6",
        bgColor: "#F0F9FF"
      }
    } else {
      return {
        type: "suboptimal",
        icon: "⚠️",
        title: "Screen Resolution Notice",
        description: "For the optimal dashboard experience, use 1920+ resolution as per Figma design.",
        color: "#F59E0B",
        bgColor: "#FEF3E6"
      }
    }
  }

  const screenInfo = getCurrentScreenInfo()

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "20px",
          boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
          border: "1px solid #E2E8F0"
        }
      }}
    >
      <DialogTitle sx={{ 
        p: 0,
        position: "relative"
      }}>
        <Box sx={{
          p: 3,
          pb: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <Typography variant="h6" sx={{
            fontWeight: 600,
            color: "#05004E",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "20px"
          }}>
            Dashboard View Optimization
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{
              color: "#7B91B0",
              "&:hover": {
                backgroundColor: "#F8F9FA"
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ p: 3, pt: 0 }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 2
        }}>
          {/* Icon and Status */}
          <Box sx={{
            p: 3,
            borderRadius: "16px",
            backgroundColor: screenInfo.bgColor,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: "100%"
          }}>
            <Typography sx={{ fontSize: "48px" }}>
              {screenInfo.icon}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {screenInfo.type !== "suboptimal" && (
                <CheckIcon sx={{ fontSize: 20, color: screenInfo.color }} />
              )}
              <Typography sx={{
                fontSize: "18px",
                fontWeight: 600,
                color: screenInfo.color,
                fontFamily: "'Poppins', sans-serif"
              }}>
                {screenInfo.title}
              </Typography>
            </Box>
          </Box>

          {/* Description */}
          <Typography sx={{
            fontSize: "14px",
            color: "#7B91B0",
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "20px",
            maxWidth: "400px"
          }}>
            {screenInfo.description.split('1920px').map((part, index) => (
              <span key={index}>
                {index > 0 && (
                  <Box
                    component="span"
                    sx={{
                      backgroundColor: "#FEF3E6",
                      color: "#D97706",
                      fontWeight: 700,
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontSize: "13px",
                      fontFamily: "'Poppins', sans-serif"
                    }}
                  >
                    1920px
                  </Box>
                )}
                {part}
              </span>
            ))}
          </Typography>

          {/* Recommendations */}
          {screenInfo.type === "suboptimal" && (
            <Box sx={{
              p: 2,
              backgroundColor: "#F8F9FA",
              borderRadius: "12px",
              width: "100%",
              textAlign: "left"
            }}>
              <Typography sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#05004E",
                fontFamily: "'Poppins', sans-serif",
                mb: 1
              }}>
                Recommended Screen Sizes:
              </Typography>
              <Typography sx={{
                fontSize: "11px",
                color: "#10B981",
                fontFamily: "'Poppins', sans-serif",
                mb: 2,
                fontStyle: "italic"
              }}>
                💡 The dashboard is fully mobile responsive for optimal viewing on all devices
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ fontSize: "16px" }}>🖥️</Typography>
                  <Typography sx={{
                    fontSize: "12px",
                    color: "#7B91B0",
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    Desktop: <Box
                      component="span"
                      sx={{
                        backgroundColor: "#FEF3E6",
                        color: "#D97706",
                        fontWeight: 700,
                        padding: "1px 4px",
                        borderRadius: "3px",
                        fontSize: "11px",
                        fontFamily: "'Poppins', sans-serif"
                      }}
                    >
                      1920px
                    </Box> or larger
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ fontSize: "16px" }}>📱</Typography>
                  <Typography sx={{
                    fontSize: "12px",
                    color: "#7B91B0",
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    Mobile: 768px or smaller
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 0 }}>
        <Button
          onClick={handleClose}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: screenInfo.color,
            color: "white",
            fontWeight: 600,
            fontSize: "14px",
            fontFamily: "'Poppins', sans-serif",
            borderRadius: "12px",
            py: 1.5,
            textTransform: "none",
            "&:hover": {
              backgroundColor: screenInfo.color,
              filter: "brightness(0.9)"
            }
          }}
        >
          {screenInfo.type === "suboptimal" ? "Got it, Continue" : "Perfect!"}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
"use client"
import { Card, CardContent, Typography, Box, Divider } from "@mui/material"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", volume: 85, services: 65 },
  { month: "Feb", volume: 90, services: 70 },
  { month: "Mar", volume: 75, services: 80 },
  { month: "Apr", volume: 95, services: 75 },
  { month: "May", volume: 80, services: 85 },
  { month: "Jun", volume: 100, services: 90 },
  { month: "Jul", volume: 85, services: 75 },
]

export default function VolumeVsService() {
  return (
    <Card sx={{ 
      height: "351px", 
      borderRadius: "26px", 
      border: "1px solid #EDF2F6",
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
          sx={{ 
            fontWeight: 600, 
            mb: { xs: "12px", sm: "16px", md: "20px" },
            color: "#05004E",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            lineHeight: { xs: "24px", sm: "28px", md: "32px" },
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          Volume vs Service Level
        </Typography>

        {/* Chart */}
        <Box sx={{ flex: 1, minHeight: 0, mb: { xs: "12px", sm: "16px", md: "20px" } }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#7B91B0", fontFamily: "'Poppins', sans-serif" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#7B91B0", fontFamily: "'Poppins', sans-serif" }} />
              <Bar dataKey="volume" fill="#0095FF" radius={[2, 2, 0, 0]} />
              <Bar dataKey="services" fill="#00E096" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Divider */}
        <Divider sx={{ 
          borderColor: "#EDF2F6", 
          mb: { xs: "12px", sm: "16px", md: "20px" } 
        }} />

        {/* Stats with vertical divider */}
        <Box sx={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          position: "relative",
          gap: "20px"
        }}>
          {/* Volume Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "6px",
                backgroundColor: "#0095FF",
              }}
            />
            <Box>
              <Typography 
                sx={{ 
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#96A5B8",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "30px"
                }}
              >
                Volume
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#222B45",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "20px"
                }}
              >
                1,135
              </Typography>
            </Box>
          </Box>

          {/* Vertical Divider */}
          <Box
            sx={{
              width: "1px",
              height: "40px",
              backgroundColor: "#BDC9D3"
            }}
          />

          {/* Services Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "6px",
                backgroundColor: "#00E096",
              }}
            />
            <Box>
              <Typography 
                sx={{ 
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#96A5B8",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "30px"
                }}
              >
                Services
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#222B45",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "20px"
                }}
              >
                635
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

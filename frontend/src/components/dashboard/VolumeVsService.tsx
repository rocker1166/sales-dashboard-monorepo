"use client"
import { Card, CardContent, Typography, Box } from "@mui/material"
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
          Volume vs Service Level
        </Typography>

        {/* Stats */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#3B82F6",
              }}
            />
            <Box>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Volume
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                1,135
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#10B981",
              }}
            />
            <Box>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Services
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                635
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: 1, minHeight: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} />
              <Bar dataKey="volume" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="services" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  )
}

"use client"
import { Card, CardContent, Typography, Box } from "@mui/material"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", reality: 8.2, target: 12.1 },
  { month: "Feb", reality: 9.5, target: 11.8 },
  { month: "Mar", reality: 11.2, target: 12.5 },
  { month: "Apr", reality: 10.8, target: 12.2 },
  { month: "May", reality: 12.1, target: 12.8 },
  { month: "Jun", reality: 11.5, target: 13.2 },
  { month: "Jul", reality: 13.8, target: 13.5 },
]

export default function TargetVsReality() {
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
          Target vs Reality
        </Typography>

        {/* Stats */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
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
                Reality Sales
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                8,823
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#F59E0B",
              }}
            />
            <Box>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Target Sales
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                12,122
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: 1, minHeight: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} />
              <Bar dataKey="reality" fill="#10B981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="target" fill="#F59E0B" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  )
}

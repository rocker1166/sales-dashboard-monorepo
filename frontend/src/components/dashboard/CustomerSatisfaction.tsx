"use client"
import { Card, CardContent, Typography, Box } from "@mui/material"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", lastMonth: 3.2, thisMonth: 3.8 },
  { month: "Feb", lastMonth: 3.4, thisMonth: 4.0 },
  { month: "Mar", lastMonth: 3.1, thisMonth: 3.9 },
  { month: "Apr", lastMonth: 3.3, thisMonth: 4.2 },
  { month: "May", lastMonth: 3.0, thisMonth: 4.1 },
  { month: "Jun", lastMonth: 3.2, thisMonth: 4.3 },
  { month: "Jul", lastMonth: 3.5, thisMonth: 4.5 },
  { month: "Aug", lastMonth: 3.4, thisMonth: 4.4 },
  { month: "Sep", lastMonth: 3.6, thisMonth: 4.6 },
  { month: "Oct", lastMonth: 3.3, thisMonth: 4.3 },
  { month: "Nov", lastMonth: 3.1, thisMonth: 4.1 },
  { month: "Dec", lastMonth: 3.0, thisMonth: 4.0 },
]

export default function CustomerSatisfaction() {
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
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700,
              color: "#1E293B",
              fontSize: "20px",
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            Customer Satisfaction
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                Last Month
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  color: "#3B82F6",
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                $3,004
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                This Month
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  color: "#10B981",
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                $4,504
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: 1, minHeight: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} />
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <Area
                type="monotone"
                dataKey="lastMonth"
                stroke="#3B82F6"
                fillOpacity={1}
                fill="url(#colorLastMonth)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="thisMonth"
                stroke="#10B981"
                fillOpacity={1}
                fill="url(#colorThisMonth)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  )
}

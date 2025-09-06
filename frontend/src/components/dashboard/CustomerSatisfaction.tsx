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
          sx={{ 
            fontWeight: 600,
            color: "#05004E",
            fontSize: "20px",
            lineHeight: "32px",
            fontFamily: "'Poppins', sans-serif",
            mb: 3
          }}
        >
          Customer Satisfaction
        </Typography>

        <Box sx={{ flex: 1, minHeight: 0, position: "relative" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 40 }}>
              <defs>
                <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4079ED" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4079ED" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#7B91B0", fontFamily: "'Poppins', sans-serif" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#7B91B0", fontFamily: "'Poppins', sans-serif" }} />
              <CartesianGrid strokeDasharray="1 1" stroke="#F1F5F9" strokeWidth={1} vertical={false} />
              <Area
                type="monotone"
                dataKey="lastMonth"
                stroke="#4079ED"
                fillOpacity={1}
                fill="url(#colorLastMonth)"
                strokeWidth={2.5}
              />
              <Area
                type="monotone"
                dataKey="thisMonth"
                stroke="#10B981"
                fillOpacity={1}
                fill="url(#colorThisMonth)"
                strokeWidth={2.5}
              />
            </AreaChart>
          </ResponsiveContainer>
          
          {/* Legend positioned at bottom like Figma */}
          <Box sx={{ 
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            padding: "8px 0"
          }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Box sx={{ 
                width: "12px", 
                height: "3px", 
                backgroundColor: "#4079ED",
                borderRadius: "2px"
              }} />
              <Typography 
                sx={{ 
                  fontSize: "12px",
                  color: "#7B91B0",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400
                }}
              >
                Last Month
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: "14px",
                  color: "#05004E",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  ml: "4px"
                }}
              >
                $3,004
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Box sx={{ 
                width: "12px", 
                height: "3px", 
                backgroundColor: "#10B981",
                borderRadius: "2px"
              }} />
              <Typography 
                sx={{ 
                  fontSize: "12px",
                  color: "#7B91B0",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400
                }}
              >
                This Month
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: "14px",
                  color: "#05004E",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  ml: "4px"
                }}
              >
                $4,504
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

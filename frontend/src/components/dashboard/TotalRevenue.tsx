"use client"
import { Card, CardContent, Typography, Box } from "@mui/material"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"

const data = [
  { day: "Monday", onlineSales: 15, offlineSales: 12 },
  { day: "Tuesday", onlineSales: 18, offlineSales: 15 },
  { day: "Wednesday", onlineSales: 12, offlineSales: 8 },
  { day: "Thursday", onlineSales: 16, offlineSales: 10 },
  { day: "Friday", onlineSales: 14, offlineSales: 16 },
  { day: "Saturday", onlineSales: 20, offlineSales: 18 },
  { day: "Sunday", onlineSales: 22, offlineSales: 14 },
]

export default function TotalRevenue() {
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
          Total Revenue
        </Typography>

        <Box sx={{ flex: 1, minHeight: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} />
              <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "20px" }} />
              <Bar dataKey="onlineSales" fill="#3B82F6" name="Online Sales" radius={[4, 4, 0, 0]} />
              <Bar dataKey="offlineSales" fill="#10B981" name="Offline Sales" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  )
}

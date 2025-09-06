"use client"
import { Card, CardContent, Typography, Box } from "@mui/material"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"

const data = [
  { month: "Jan", loyalCustomers: 200, newCustomers: 150, uniqueCustomers: 180 },
  { month: "Feb", loyalCustomers: 180, newCustomers: 200, uniqueCustomers: 220 },
  { month: "Mar", loyalCustomers: 220, newCustomers: 180, uniqueCustomers: 200 },
  { month: "Apr", loyalCustomers: 200, newCustomers: 220, uniqueCustomers: 250 },
  { month: "May", loyalCustomers: 250, newCustomers: 200, uniqueCustomers: 280 },
  { month: "Jun", loyalCustomers: 280, newCustomers: 250, uniqueCustomers: 300 },
  { month: "Jul", loyalCustomers: 320, newCustomers: 280, uniqueCustomers: 350 },
  { month: "Aug", loyalCustomers: 300, newCustomers: 320, uniqueCustomers: 330 },
  { month: "Sep", loyalCustomers: 350, newCustomers: 300, uniqueCustomers: 380 },
  { month: "Oct", loyalCustomers: 330, newCustomers: 350, uniqueCustomers: 360 },
  { month: "Nov", loyalCustomers: 280, newCustomers: 330, uniqueCustomers: 320 },
  { month: "Dec", loyalCustomers: 250, newCustomers: 280, uniqueCustomers: 290 },
]

export default function VisitorInsights() {
  return (
    <Card sx={{ 
      height: "348px", 
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
            fontSize: "20px"
          }}
        >
          Visitor Insights
        </Typography>

        <Box sx={{ flex: 1, minHeight: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} />
              <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "20px" }} />
              <Line
                type="monotone"
                dataKey="loyalCustomers"
                stroke="#8B5CF6"
                strokeWidth={3}
                name="Loyal Customers"
                dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="newCustomers"
                stroke="#EF4444"
                strokeWidth={3}
                name="New Customers"
                dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="uniqueCustomers"
                stroke="#10B981"
                strokeWidth={3}
                name="Unique Customers"
                dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  )
}

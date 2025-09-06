"use client"
import { Card, CardContent, Typography, Box } from "@mui/material"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { month: "Jan", loyalCustomers: 180, newCustomers: 130, uniqueCustomers: 220 },
  { month: "Feb", loyalCustomers: 200, newCustomers: 150, uniqueCustomers: 260 },
  { month: "Mar", loyalCustomers: 170, newCustomers: 140, uniqueCustomers: 240 },
  { month: "Apr", loyalCustomers: 190, newCustomers: 160, uniqueCustomers: 300 },
  { month: "May", loyalCustomers: 210, newCustomers: 150, uniqueCustomers: 340 },
  { month: "Jun", loyalCustomers: 220, newCustomers: 170, uniqueCustomers: 370 },
  { month: "Jul", loyalCustomers: 240, newCustomers: 190, uniqueCustomers: 420 },
  { month: "Aug", loyalCustomers: 230, newCustomers: 200, uniqueCustomers: 400 },
  { month: "Sep", loyalCustomers: 250, newCustomers: 180, uniqueCustomers: 440 },
  { month: "Oct", loyalCustomers: 235, newCustomers: 210, uniqueCustomers: 420 },
  { month: "Nov", loyalCustomers: 215, newCustomers: 195, uniqueCustomers: 380 },
  { month: "Dec", loyalCustomers: 195, newCustomers: 175, uniqueCustomers: 360 },
]

export default function VisitorInsights() {

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box sx={{
          backgroundColor: "white",
          border: "1px solid #E2E8F0",
          borderRadius: "8px",
          padding: "12px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"
        }}>
          <Typography sx={{ 
            fontSize: "14px", 
            fontWeight: 600, 
            color: "#05004E",
            fontFamily: "'Poppins', sans-serif",
            mb: 1
          }}>
            {label}
          </Typography>
          {payload.map((entry: any, index: number) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
              <Box sx={{
                width: "12px",
                height: "12px",
                backgroundColor: entry.color,
                borderRadius: "50%"
              }} />
              <Typography sx={{ 
                fontSize: "12px", 
                color: "#7B91B0",
                fontFamily: "'Poppins', sans-serif"
              }}>
                {entry.name}: {entry.value}
              </Typography>
            </Box>
          ))}
        </Box>
      )
    }
    return null
  }


  return (
    <Card sx={{ 
      height: "348px", 
      borderRadius: "20px", 
      border: "1px solid #F8F9FA",
      backgroundColor: "white",
      boxShadow: "0px 4px 20px 0px rgba(238, 238, 238, 0.5)",
      width: "100%"
    }}>
      <CardContent sx={{ 
        p: { xs: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" }, 
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}>
        <Typography 
          sx={{ 
            fontWeight: 600, 
            mb: { xs: "16px", sm: "20px", md: "24px" },
            color: "#05004E",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            lineHeight: { xs: "24px", sm: "28px", md: "32px" },
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          Visitor Insights
        </Typography>

        <Box sx={{ 
          flex: 1, 
          minHeight: 0,
          width: "100%"
        }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={data} 
              margin={{ 
                top: 20, 
                right: 30, 
                left: 20, 
                bottom: 20 
              }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#F1F5F9" 
                strokeWidth={1}
                vertical={false}
              />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ 
                  fontSize: 12, 
                  fill: "#737791",
                  fontFamily: "'Poppins', sans-serif"
                }}
                interval={0}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ 
                  fontSize: 12, 
                  fill: "#737791",
                  fontFamily: "'Poppins', sans-serif"
                }}
                domain={[0, 'dataMax + 50']}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ 
                  fontSize: "12px",
                  paddingTop: "20px",
                  fontFamily: "'Poppins', sans-serif"
                }}
                iconType="circle"
                iconSize={8}
              />
              <Line
                type="monotone"
                dataKey="loyalCustomers"
                stroke="#4079ED"
                strokeWidth={2.5}
                name="Loyal Customers"
                dot={{ fill: "#4079ED", strokeWidth: 2, r: 4 }}
                activeDot={{ 
                  r: 6, 
                  stroke: "#4079ED", 
                  strokeWidth: 2,
                  fill: "#FFFFFF"
                }}
              />
              <Line
                type="monotone"
                dataKey="newCustomers"
                stroke="#FA5A7D"
                strokeWidth={2.5}
                name="New Customers"
                dot={{ fill: "#FA5A7D", strokeWidth: 2, r: 4 }}
                activeDot={{ 
                  r: 6, 
                  stroke: "#FA5A7D", 
                  strokeWidth: 2,
                  fill: "#FFFFFF"
                }}
              />
              <Line
                type="monotone"
                dataKey="uniqueCustomers"
                stroke="#10B981"
                strokeWidth={2.5}
                name="Unique Customers"
                dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                activeDot={{ 
                  r: 6, 
                  stroke: "#10B981", 
                  strokeWidth: 2,
                  fill: "#FFFFFF"
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

      </CardContent>
    </Card>
  )
}

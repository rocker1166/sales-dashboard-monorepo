"use client"
import { Card, CardContent, Typography, Box } from "@mui/material"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { useVisitorInsights } from "@/hooks/useDashboardData"
import LoadingSpinner from "@/components/ui/LoadingSpinner"
import ErrorDisplay from "@/components/ui/ErrorDisplay"

export default function VisitorInsights() {
  const { data: visitorData, isLoading, error, refetch } = useVisitorInsights();

  // Transform API data to chart format
  const chartData = visitorData?.map(item => ({
    month: item.month.substring(0, 3), // Short month name
    loyalCustomers: item.loyalCustomers,
    newCustomers: item.newCustomers,
    uniqueCustomers: item.uniqueCustomers,
  })) || [];

  if (isLoading) {
    return (
      <Box sx={{ 
        backgroundColor: "white",
        borderRadius: "20px",
        padding: { xs: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" },
        border: "1px solid #F8F9FA",
        boxShadow: "0px 4px 20px 0px rgba(238, 238, 238, 0.5)",
        minHeight: { xs: "280px", sm: "320px", md: "348px" },
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative"
      }}>
        <LoadingSpinner message="Loading visitor insights..." fullHeight />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ 
        backgroundColor: "white",
        borderRadius: "20px",
        padding: { xs: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" },
        border: "1px solid #F8F9FA",
        boxShadow: "0px 4px 20px 0px rgba(238, 238, 238, 0.5)",
        minHeight: { xs: "280px", sm: "320px", md: "348px" },
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative"
      }}>
        <ErrorDisplay message={error} onRetry={refetch} fullHeight />
      </Box>
    );
  }

  if (!visitorData || visitorData.length === 0) {
    return (
      <Box sx={{ 
        backgroundColor: "white",
        borderRadius: "20px",
        padding: { xs: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" },
        border: "1px solid #F8F9FA",
        boxShadow: "0px 4px 20px 0px rgba(238, 238, 238, 0.5)",
        minHeight: { xs: "280px", sm: "320px", md: "348px" },
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative"
      }}>
        <ErrorDisplay message="No visitor insights data available" fullHeight showRetry={false} />
      </Box>
    );
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box sx={{
          backgroundColor: "white",
          border: "1px solid #E2E8F0",
          borderRadius: "8px",
          padding: "12px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          minWidth: "120px"
        }}>
          <Typography sx={{ 
            fontSize: "14px", 
            fontWeight: 600, 
            color: "#05004E",
            fontFamily: "'Poppins', sans-serif",
            mb: 1,
            textAlign: "center"
          }}>
            {label}
          </Typography>
          {payload.map((entry: any, index: number) => (
            <Box key={index} sx={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              gap: 1, 
              mb: 0.5 
            }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: entry.color,
                  borderRadius: "2px"
                }} />
                <Typography sx={{ 
                  fontSize: "12px", 
                  color: "#7B91B0",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  {entry.name}
                </Typography>
              </Box>
              <Typography sx={{ 
                fontSize: "12px", 
                color: "#05004E",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600
              }}>
                {entry.value}
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
              data={chartData} 
              margin={{ 
                top: 20, 
                right: 30, 
                left: 20, 
                bottom: 20 
              }}
            >
              <CartesianGrid 
                strokeDasharray="1 1" 
                stroke="#F1F5F9" 
                strokeWidth={1}
                vertical={false}
                horizontal={true}
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
                domain={[0, 400]}
                ticks={[0, 100, 200, 300, 400]}
                tickFormatter={(value) => value.toString()}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ 
                  fontSize: "12px",
                  paddingTop: "20px",
                  fontFamily: "'Poppins', sans-serif"
                }}
                iconType="rect"
                iconSize={8}
              />
              <Line
                type="monotone"
                dataKey="loyalCustomers"
                stroke="#4079ED"
                strokeWidth={2.5}
                name="Loyal Customers"
                dot={false}
                activeDot={{ 
                  r: 6, 
                  stroke: "#4079ED", 
                  strokeWidth: 2,
                  fill: "#FFFFFF",
                  strokeDasharray: "0"
                }}
                connectNulls={false}
              />
              <Line
                type="monotone"
                dataKey="newCustomers"
                stroke="#FA5A7D"
                strokeWidth={2.5}
                name="New Customers"
                dot={false}
                activeDot={{ 
                  r: 6, 
                  stroke: "#FA5A7D", 
                  strokeWidth: 2,
                  fill: "#FFFFFF",
                  strokeDasharray: "0"
                }}
                connectNulls={false}
              />
              <Line
                type="monotone"
                dataKey="uniqueCustomers"
                stroke="#10B981"
                strokeWidth={2.5}
                name="Unique Customers"
                dot={false}
                activeDot={{ 
                  r: 6, 
                  stroke: "#10B981", 
                  strokeWidth: 2,
                  fill: "#FFFFFF",
                  strokeDasharray: "0"
                }}
                connectNulls={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

      </CardContent>
    </Card>
  )
}

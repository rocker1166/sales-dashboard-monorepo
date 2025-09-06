"use client"
import { Card, CardContent, Typography, Box } from "@mui/material"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { useRevenue } from "@/hooks/useDashboardData"
import LoadingSpinner from "@/components/ui/LoadingSpinner"
import ErrorDisplay from "@/components/ui/ErrorDisplay"

export default function TotalRevenue() {
  const { data: revenueData, isLoading, error, refetch } = useRevenue();

  // Transform API data to chart format (convert to thousands for display)
  const chartData = revenueData?.map(item => ({
    day: item.day,
    onlineSales: Math.round(item.onlineSales / 1000 * 10) / 10, // Convert to k format
    offlineSales: Math.round(item.offlineSales / 1000 * 10) / 10,
  })) || [];

  if (isLoading) {
    return (
      <Card sx={{ 
        height: "351px", 
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
          <LoadingSpinner message="Loading revenue data..." fullHeight />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card sx={{ 
        height: "351px", 
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
          <ErrorDisplay message={error} onRetry={refetch} fullHeight />
        </CardContent>
      </Card>
    );
  }

  if (!revenueData || revenueData.length === 0) {
    return (
      <Card sx={{ 
        height: "351px", 
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
          <ErrorDisplay message="No revenue data available" fullHeight showRetry={false} />
        </CardContent>
      </Card>
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
                borderRadius: "2px"
              }} />
              <Typography sx={{ 
                fontSize: "12px", 
                color: "#7B91B0",
                fontFamily: "'Poppins', sans-serif"
              }}>
                {entry.name}: {entry.value}k
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
      height: "351px", 
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
            mb: { xs: "12px", sm: "16px", md: "20px" },
            color: "#05004E",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            lineHeight: { xs: "24px", sm: "28px", md: "32px" },
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          Total Revenue
        </Typography>

        <Box sx={{ 
          flex: 1, 
          minHeight: 0,
          width: "100%",
          height: "240px" // Exact height from Figma
        }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={chartData} 
              margin={{ 
                top: 5, 
                right: 5,  
                bottom: 30 
              }}
            >
              <CartesianGrid 
                strokeDasharray="1 1" 
                stroke="#E2E8F0" 
                strokeWidth={1}
                vertical={false}
              />
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ 
                  fontSize: 12, 
                  fill: "#7B91B0",
                  fontFamily: "'Poppins', sans-serif"
                }}
                interval={0}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ 
                  fontSize: 12, 
                  fill: "#7B91B0",
                  fontFamily: "'Poppins', sans-serif"
                }}
                domain={[0, 25]}
                ticks={[0, 5, 10, 15, 20, 25]}
                tickFormatter={(value) => `${value}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ 
                  fontSize: "12px",
                  paddingTop: "5px",
                  fontFamily: "'Poppins', sans-serif"
                }}
                iconType="rect"
                iconSize={11}
              />
              <Bar 
                dataKey="onlineSales" 
                fill="#0095FF" 
                name="Online Sales" 
                radius={[2, 2, 0, 0]}
                maxBarSize={50}
              />
              <Bar 
                dataKey="offlineSales" 
                fill="#00E096" 
                name="Offline Sales" 
                radius={[2, 2, 0, 0]}
                maxBarSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>

      </CardContent>
    </Card>
  )
}

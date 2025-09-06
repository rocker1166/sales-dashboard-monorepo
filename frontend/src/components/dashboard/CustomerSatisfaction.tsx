"use client"
import { Card, CardContent, Typography, Box } from "@mui/material"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import { useCustomerSatisfaction } from "@/hooks/useDashboardData"
import LoadingSpinner from "@/components/ui/LoadingSpinner"
import ErrorDisplay from "@/components/ui/ErrorDisplay"

export default function CustomerSatisfaction() {
  const { data: satisfactionData, isLoading, error, refetch } = useCustomerSatisfaction();

  // Transform API data to chart format (convert to 5-point scale)
  const chartData = satisfactionData?.map(item => ({
    month: item.month.substring(0, 3), // Short month name
    lastMonth: item.lastMonth / 20, // Convert from 100-point to 5-point scale
    thisMonth: item.thisMonth / 20,
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
          <LoadingSpinner message="Loading customer satisfaction data..." fullHeight />
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

  if (!satisfactionData || satisfactionData.length === 0) {
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
          <ErrorDisplay message="No customer satisfaction data available" fullHeight showRetry={false} />
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
                height: "3px",
                backgroundColor: entry.color,
                borderRadius: "2px"
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
            <AreaChart 
              data={chartData} 
              margin={{ top: 10, right: 30, left: 0, bottom: 40 }}
            >
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
              <CartesianGrid strokeDasharray="1 1" stroke="#F1F5F9" strokeWidth={1} vertical={false} />
              <Tooltip content={<CustomTooltip />} />
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

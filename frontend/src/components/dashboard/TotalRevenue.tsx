"use client"
import { Card, CardContent, Typography, Box } from "@mui/material"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip, Cell } from "recharts"
import { useState } from "react"

const data = [
  { day: "Monday", onlineSales: 14, offlineSales: 12 },
  { day: "Tuesday", onlineSales: 17, offlineSales: 12 },
  { day: "Wednesday", onlineSales: 6, offlineSales: 22 },
  { day: "Thursday", onlineSales: 16, offlineSales: 6 },
  { day: "Friday", onlineSales: 12, offlineSales: 11.5 },
  { day: "Saturday", onlineSales: 17, offlineSales: 13 },
  { day: "Sunday", onlineSales: 21, offlineSales: 11 },
]

export default function TotalRevenue() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [selectedData, setSelectedData] = useState<any>(null)

  const handleBarClick = (data: any, index: number) => {
    setActiveIndex(index)
    setSelectedData(data)
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
              data={data} 
              margin={{ 
                top: 5, 
                right: 5,  
                bottom: 30 
              }}
              onClick={handleBarClick}
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
                cursor="pointer"
                onClick={(data, index) => handleBarClick(data, index)}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={activeIndex === index ? "#007ACC" : "#0095FF"}
                    style={{ 
                      filter: activeIndex === index ? "brightness(0.8)" : "none",
                      transition: "all 0.2s ease"
                    }}
                  />
                ))}
              </Bar>
              <Bar 
                dataKey="offlineSales" 
                fill="#00E096" 
                name="Offline Sales" 
                radius={[2, 2, 0, 0]}
                maxBarSize={50}
                cursor="pointer"
                onClick={(data, index) => handleBarClick(data, index)}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={activeIndex === index ? "#00B87A" : "#00E096"}
                    style={{ 
                      filter: activeIndex === index ? "brightness(0.8)" : "none",
                      transition: "all 0.2s ease"
                    }}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Selected Data Display */}
        {selectedData && (
          <Box sx={{
            mt: 2,
            p: 2,
            backgroundColor: "#F8F9FA",
            borderRadius: "12px",
            border: "1px solid #E2E8F0"
          }}>
            <Typography sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#05004E",
              fontFamily: "'Poppins', sans-serif",
              mb: 1
            }}>
              Selected: {selectedData.day}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#0095FF",
                  borderRadius: "2px"
                }} />
                <Typography sx={{
                  fontSize: "12px",
                  color: "#7B91B0",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Online: {selectedData.onlineSales}k
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#00E096",
                  borderRadius: "2px"
                }} />
                <Typography sx={{
                  fontSize: "12px",
                  color: "#7B91B0",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Offline: {selectedData.offlineSales}k
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

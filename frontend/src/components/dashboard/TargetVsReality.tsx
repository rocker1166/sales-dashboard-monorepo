"use client"
import { Card, CardContent, Typography, Box } from "@mui/material"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip, Cell } from "recharts"
import { useState } from "react"

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
                borderRadius: "6px"
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
          Target vs Reality
        </Typography>

        <Box sx={{ 
          flex: 1, 
          minHeight: 0,
          width: "100%",
          height: "180px"
        }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={data} 
              margin={{ 
                top: 5, 
                right: 5, 
                bottom: 5 
              }}
              onClick={handleBarClick}
            >
              <CartesianGrid 
                strokeDasharray="1 1" 
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
                domain={[0, 15]}
                ticks={[0, 3, 6, 9, 12, 15]}
                tickFormatter={(value) => `${value}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="reality" 
                fill="#10B981" 
                radius={[2, 2, 0, 0]}
                maxBarSize={50}
                cursor="pointer"
                onClick={(data, index) => handleBarClick(data, index)}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={activeIndex === index ? "#0D9B6C" : "#10B981"}
                    style={{ 
                      filter: activeIndex === index ? "brightness(0.8)" : "none",
                      transition: "all 0.2s ease"
                    }}
                  />
                ))}
              </Bar>
              <Bar 
                dataKey="target" 
                fill="#F59E0B" 
                radius={[2, 2, 0, 0]}
                maxBarSize={50}
                cursor="pointer"
                onClick={(data, index) => handleBarClick(data, index)}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={activeIndex === index ? "#D97706" : "#F59E0B"}
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

        {/* Sales sections positioned below chart like Figma */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: "column",
          gap: "16px",
          mt: "20px",
          alignItems: "flex-start"
        }}>
          {/* Reality Sales */}
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            width: "235px",
            height: "36px"
          }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box sx={{ 
                width: "36px", 
                height: "36px", 
                borderRadius: "6px",
                backgroundColor: "#E2FFF3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Box sx={{ 
                  width: "18px", 
                  height: "18px", 
                  backgroundColor: "#27AE60",
                  borderRadius: "3px"
                }} />
              </Box>
              <Box>
                <Typography 
                  sx={{ 
                    fontSize: "12px",
                    color: "#151D48",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    lineHeight: "16px"
                  }}
                >
                  Reality Sales
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: "10px",
                    color: "#737791",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    lineHeight: "16px"
                  }}
                >
                  Global
                </Typography>
              </Box>
            </Box>
            <Typography 
              sx={{ 
                fontSize: "14px",
                color: "#27AE60",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                lineHeight: "20px"
              }}
            >
              8.823
            </Typography>
          </Box>

          {/* Target Sales */}
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            width: "235px",
            height: "36px"
          }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box sx={{ 
                width: "36px", 
                height: "36px", 
                borderRadius: "6px",
                backgroundColor: "#FEF3E6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Box sx={{ 
                  width: "18px", 
                  height: "18px", 
                  backgroundColor: "#F59E0B",
                  borderRadius: "3px"
                }} />
              </Box>
              <Box>
                <Typography 
                  sx={{ 
                    fontSize: "12px",
                    color: "#151D48",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    lineHeight: "16px"
                  }}
                >
                  Target Sales
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: "10px",
                    color: "#737791",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    lineHeight: "16px"
                  }}
                >
                  Commercial
                </Typography>
              </Box>
            </Box>
            <Typography 
              sx={{ 
                fontSize: "14px",
                color: "#F59E0B",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                lineHeight: "20px"
              }}
            >
              12.122
            </Typography>
          </Box>
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
              Selected: {selectedData.month}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#10B981",
                  borderRadius: "6px"
                }} />
                <Typography sx={{
                  fontSize: "12px",
                  color: "#7B91B0",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Reality: {selectedData.reality}k
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#F59E0B",
                  borderRadius: "6px"
                }} />
                <Typography sx={{
                  fontSize: "12px",
                  color: "#7B91B0",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Target: {selectedData.target}k
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

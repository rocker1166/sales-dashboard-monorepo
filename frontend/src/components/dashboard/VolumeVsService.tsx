"use client"
import { Card, CardContent, Typography, Box, Divider } from "@mui/material"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts"
import { useState } from "react"

const data = [
  { month: "Jan", volume: 85, services: 65 },
  { month: "Feb", volume: 90, services: 70 },
  { month: "Mar", volume: 75, services: 80 },
  { month: "Apr", volume: 95, services: 75 },
  { month: "May", volume: 80, services: 85 },
  { month: "Jun", volume: 100, services: 90 },
  { month: "Jul", volume: 85, services: 75 },
]

export default function VolumeVsService() {
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
      borderRadius: "26px", 
      border: "1px solid #EDF2F6",
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
            mb: { xs: "12px", sm: "16px", md: "20px" },
            color: "#05004E",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            lineHeight: { xs: "24px", sm: "28px", md: "32px" },
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          Volume vs Service Level
        </Typography>

        {/* Chart */}
        <Box sx={{ flex: 1, minHeight: 0, mb: { xs: "12px", sm: "16px", md: "20px" } }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={data} 
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
              onClick={handleBarClick}
            >
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#7B91B0", fontFamily: "'Poppins', sans-serif" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#7B91B0", fontFamily: "'Poppins', sans-serif" }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="volume" 
                fill="#0095FF" 
                radius={[2, 2, 0, 0]}
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
                dataKey="services" 
                fill="#00E096" 
                radius={[2, 2, 0, 0]}
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

        {/* Divider */}
        <Divider sx={{ 
          borderColor: "#EDF2F6", 
          mb: { xs: "12px", sm: "16px", md: "20px" } 
        }} />

        {/* Stats with vertical divider */}
        <Box sx={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          position: "relative",
          gap: "20px"
        }}>
          {/* Volume Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "6px",
                backgroundColor: "#0095FF",
              }}
            />
            <Box>
              <Typography 
                sx={{ 
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#96A5B8",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "30px"
                }}
              >
                Volume
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#222B45",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "20px"
                }}
              >
                1,135
              </Typography>
            </Box>
          </Box>

          {/* Vertical Divider */}
          <Box
            sx={{
              width: "1px",
              height: "40px",
              backgroundColor: "#BDC9D3"
            }}
          />

          {/* Services Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "6px",
                backgroundColor: "#00E096",
              }}
            />
            <Box>
              <Typography 
                sx={{ 
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#96A5B8",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "30px"
                }}
              >
                Services
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#222B45",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "20px"
                }}
              >
                635
              </Typography>
            </Box>
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
                  backgroundColor: "#0095FF",
                  borderRadius: "6px"
                }} />
                <Typography sx={{
                  fontSize: "12px",
                  color: "#7B91B0",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Volume: {selectedData.volume}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#00E096",
                  borderRadius: "6px"
                }} />
                <Typography sx={{
                  fontSize: "12px",
                  color: "#7B91B0",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Services: {selectedData.services}
                </Typography>
              </Box>
            </Box>
        </Box>
        )}
      </CardContent>
    </Card>
  )
}

"use client"
import { Card, CardContent, Typography, Box } from "@mui/material"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts"

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
    <Card
      sx={{
        height: "351px",
        borderRadius: "20px",
        border: "1px solid #F8F9FA",
        backgroundColor: "white",
        boxShadow: "0px 4px 20px 0px rgba(238, 238, 238, 0.5)",
        width: "100%",
      }}
    >
      <CardContent
        sx={{
          p: { xs: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" },
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: { xs: "12px", sm: "16px", md: "20px" },
            color: "#05004E",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            lineHeight: { xs: "24px", sm: "28px", md: "32px" },
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Target vs Reality
        </Typography>

        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            width: "100%",
            height: "180px",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 5,
                bottom: 5,
              }}
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
                  fontFamily: "'Poppins', sans-serif",
                }}
                interval={0}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fill: "#7B91B0",
                  fontFamily: "'Poppins', sans-serif",
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
              />
              <Bar
                dataKey="target"
                fill="#F59E0B"
                radius={[2, 2, 0, 0]}
                maxBarSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Sales sections positioned below chart like Figma */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            mt: "20px",
            alignItems: "flex-start",
          }}
        >
          {/* Reality Sales */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "235px",
              height: "36px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_10_1011)">
                  <rect width="36" height="36" rx="6" fill="#E2FFF3" />
                  <mask
                    id="mask0_10_1011"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="3"
                    y="3"
                    width="30"
                    height="30"
                  >
                    <rect
                      x="3.59961"
                      y="3.6001"
                      width="28.8"
                      height="28.8"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_10_1011)">
                    <mask
                      id="mask1_10_1011"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="9"
                      y="9"
                      width="18"
                      height="18"
                    >
                      <rect
                        x="9.35938"
                        y="9.36011"
                        width="17.28"
                        height="17.28"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask1_10_1011)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.7599 24.84C22.9676 24.84 24.6614 24.0426 24.1803 20.8331L23.6201 16.4834C23.3235 14.882 22.3021 14.269 21.4057 14.269H14.0772C13.1678 14.269 12.2056 14.9281 11.8629 16.4834L11.3027 20.8331C10.8941 23.6801 12.5417 24.84 14.7495 24.84H20.7599Z"
                        stroke="#4AB58E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.6504 14.1109C14.6504 12.393 16.0431 11.0003 17.761 11.0003C18.5883 10.9968 19.3829 11.3229 19.9691 11.9067C20.5554 12.4904 20.8849 13.2837 20.8849 14.1109"
                        stroke="#4AB58E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.626 17.3535H15.6589"
                        stroke="#4AB58E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.8242 17.3535H19.8572"
                        stroke="#4AB58E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_10_1011">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#151D48",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    lineHeight: "16px",
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
                    lineHeight: "16px",
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
                lineHeight: "20px",
              }}
            >
              8.823
            </Typography>
          </Box>

          {/* Target Sales */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "235px",
              height: "36px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_10_1028)">
                  <rect width="36" height="36" rx="6" fill="#FFF4DE" />
                   <mask
                     id="mask0_10_1028"
                     style={{ maskType: "luminance" }}
                     maskUnits="userSpaceOnUse"
                    x="9"
                    y="9"
                    width="18"
                    height="18"
                  >
                    <rect
                      x="9.36035"
                      y="9.36011"
                      width="17.28"
                      height="17.28"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_10_1028)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.8015 14.5028C10.8016 12.8554 12.137 11.52 13.7845 11.52H22.2171C23.8647 11.52 25.1991 12.8555 25.1993 14.5026M25.1993 14.5026L25.2008 16.4487C25.2009 16.592 25.144 16.7295 25.0428 16.8308C24.9415 16.9322 24.8041 16.9891 24.6608 16.9891C24.0659 16.9891 23.588 17.467 23.588 18.0612C23.588 18.6549 24.0661 19.1333 24.6608 19.1333C24.959 19.1333 25.2008 19.3751 25.2008 19.6733V21.6173C25.2008 23.2647 23.8662 24.6003 22.2178 24.6003H13.783C12.1353 24.6003 10.8008 23.2646 10.8008 21.6173V19.6733C10.8008 19.3751 11.0425 19.1333 11.3408 19.1333C11.9346 19.1333 12.4129 18.6551 12.4129 18.0612C12.4129 17.4945 11.9633 17.0518 11.3408 17.0518C11.1975 17.0518 11.0602 16.9949 10.9589 16.8935C10.8576 16.7922 10.8007 16.6548 10.8008 16.5116L10.8015 14.5028C10.8015 14.5027 10.8015 14.5029 10.8015 14.5028M11.8815 14.503L11.881 16.0363C12.7936 16.2587 13.4929 17.037 13.4929 18.0612C13.4929 19.065 12.8089 19.9062 11.8808 20.1453V21.6173C11.8808 22.6686 12.7322 23.5203 13.783 23.5203H22.2178C23.2695 23.5203 24.1208 22.6685 24.1208 21.6173V20.1453C23.1921 19.9064 22.508 19.0652 22.508 18.0612C22.508 17.0567 23.192 16.2161 24.1204 15.9772L24.1193 14.5034C24.1193 13.4521 23.2679 12.6 22.2171 12.6H13.7845C12.7334 12.6 11.8815 13.4519 11.8815 14.503ZM10.8015 14.5028L25.1993 14.5026L10.8015 14.5028Z"
                      fill="#FFA800"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.628 15.4575L19.129 16.4721L20.2508 16.6352C20.8212 16.7198 21.0536 17.4218 20.6375 17.8284L20.6367 17.8293L19.8259 18.6181L20.0176 19.734C20.1162 20.31 19.5117 20.7379 19.0031 20.4727L19.0015 20.4719L18 19.9452L16.9969 20.4727C16.4883 20.7379 15.8838 20.3103 15.9824 19.7343L16.1741 18.618L15.3639 17.8291L15.3632 17.8284C14.9472 17.4218 15.1796 16.7198 15.75 16.6352L15.7515 16.635L16.871 16.4721L17.3725 15.4564L17.3731 15.4552C17.6294 14.9395 18.3701 14.9336 18.6277 15.4568C18.6278 15.4571 18.6279 15.4573 18.628 15.4575ZM17.7138 17.2047C17.6351 17.364 17.4832 17.4744 17.3074 17.5L16.6693 17.5928L17.1311 18.0425C17.2586 18.1666 17.3167 18.3454 17.2866 18.5208L17.1772 19.1577L17.7487 18.8572C17.906 18.7744 18.094 18.7744 18.2513 18.8572L18.8228 19.1577L18.7134 18.5208C18.6833 18.3454 18.7415 18.1664 18.869 18.0423L19.331 17.5928L18.6927 17.5C18.5169 17.4744 18.3649 17.364 18.2862 17.2047L18 16.625L17.7138 17.2047Z"
                      fill="#FFA800"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_10_1028">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#151D48",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    lineHeight: "16px",
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
                    lineHeight: "16px",
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
                lineHeight: "20px",
              }}
            >
              12.122
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

"use client"

import type React from "react"
import { useState } from "react"
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  InputBase,
  Badge,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  KeyboardArrowDown as ArrowDownIcon,
} from "@mui/icons-material"
import Sidebar from "./Sidebar"
import { styled, alpha } from "@mui/material/styles"

const drawerWidth = 345

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flexShrink: 0,
  borderRadius: "16px",
  background: "#F9FAFB",
  width: "513px",
  height: "60px",
  padding: "2px 32px 2px 24px",
  [theme.breakpoints.down("sm")]: {
    display: "none", // Hide search on very small screens
  },
  [theme.breakpoints.down("md")]: {
    width: "300px",
    height: "50px",
    padding: "2px 24px 2px 16px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "400px",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#64748B",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}))

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [mobileOpen, setMobileOpen] = useState(false)
  const [language, setLanguage] = useState("en")

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: "flex" }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          backgroundColor: "white",
          color: "text.primary",
          boxShadow: "none",
          borderBottom: "none",
          borderRadius: 0,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            height: { xs: 80, sm: 100, md: 120 },
            padding: { xs: "20px 16px", sm: "25px 24px", md: "35px 40px" },
            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: { xs: 1, md: 0 }
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                fontWeight: 600,
                color: "#151D48",
                fontFamily: "Poppins",
                fontSize: { xs: "24px", sm: "28px", md: "36px" },
                lineHeight: "140%",
              }}
            >
              Dashboard
            </Typography>
          </Box>

          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: { xs: 1, sm: 1.5, md: 2 },
            flexWrap: { xs: "wrap", sm: "nowrap" },
            justifyContent: { xs: "flex-end", md: "flex-start" }
          }}>
            {/* Search */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search here..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            {/* Language / Country Selector */}
            <FormControl size="small" sx={{ display: { xs: "none", sm: "block" } }}>
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                displayEmpty
                IconComponent={() => (
                  <Box
                    component="img"
                    src="/arr.svg"
                    alt="arrow"
                    sx={{ width: 16, height: 16 }}
                  />
                )}
                renderValue={(selected) => {
                  const label =
                    selected === "en"
                      ? "Eng (US)"
                      : selected === "es"
                        ? "Español"
                        : "";
                  return (
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                          component="img"
                          src="/usa.svg"
                          alt="US"
                          sx={{ width: 24, height: 24, display: "block" }}
                        />
                        <Box component="span">{label}</Box>
                      </Box>
                    </Box>
                  );
                }}
                sx={{
                  minWidth: { xs: 80, sm: 90, md: 100 },
                  display: "inline-flex",
                  height: { xs: "40px", sm: "50px", md: "60px" },
                  padding: { xs: "0 8px", sm: "0 12px", md: "0 16px" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: { xs: "8px", sm: "12px", md: "16px" },
                  flexShrink: 0,
                  border: "none",
                  boxShadow: "none",
                  // Remove outlines/borders coming from underlying input/fieldset
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  "& .MuiSelect-select": {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    border: "none",
                  },
                  "& fieldset": { border: "none" },
                }}
              >
                <MenuItem value="en">
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src="/usa.svg"
                      alt="US"
                      sx={{ width: 24, height: 24, display: "block" }}
                    />
                    <Box component="span">Eng (US)</Box>
                  </Box>
                </MenuItem>
                <MenuItem value="es">
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src="/usa.svg"
                      alt="US"
                      sx={{ width: 24, height: 24, display: "block" }}
                    />
                    <Box component="span">Español</Box>
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>

            {/* Notifications */}
            <IconButton color="inherit" sx={{ 
              width: { xs: 36, sm: 42, md: 48 }, 
              height: { xs: 36, sm: 42, md: 48 }, 
              flexShrink: 0, 
              borderRadius: '8px', 
              background: '#FFFAF1', 
              position: 'relative' 
            }}>
              <Box sx={{ position: 'absolute', top: 8, right: 12 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                  <path d="M3.33333 6.66667C5.17428 6.66667 6.66667 5.17428 6.66667 3.33333C6.66667 1.49238 5.17428 0 3.33333 0C1.49238 0 0 1.49238 0 3.33333C0 5.17428 1.49238 6.66667 3.33333 6.66667Z" fill="#EB5757"/>
                </svg>
              </Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.6732 18.5534C21.0303 17.9802 20.4675 17.3232 19.9999 16.6C19.4894 15.6017 19.1834 14.5115 19.0999 13.3934V10.1C19.1043 8.34376 18.4672 6.64633 17.3084 5.32666C16.1495 4.007 14.5486 3.15592 12.8065 2.93335V2.07335C12.8065 1.83731 12.7128 1.61093 12.5459 1.44402C12.379 1.27712 12.1526 1.18335 11.9165 1.18335C11.6805 1.18335 11.4541 1.27712 11.2872 1.44402C11.1203 1.61093 11.0265 1.83731 11.0265 2.07335V2.94668C9.30004 3.1853 7.71852 4.04152 6.57489 5.35675C5.43126 6.67199 4.80302 8.35711 4.80654 10.1V13.3934C4.72304 14.5115 4.41705 15.6017 3.90654 16.6C3.44712 17.3216 2.89333 17.9785 2.25987 18.5534C2.18876 18.6158 2.13176 18.6927 2.09268 18.7789C2.0536 18.8651 2.03332 18.9587 2.0332 19.0534V19.96C2.0332 20.1368 2.10344 20.3064 2.22847 20.4314C2.35349 20.5564 2.52306 20.6267 2.69987 20.6267H21.2332C21.41 20.6267 21.5796 20.5564 21.7046 20.4314C21.8296 20.3064 21.8999 20.1368 21.8999 19.96V19.0534C21.8997 18.9587 21.8795 18.8651 21.8404 18.7789C21.8013 18.6927 21.7443 18.6158 21.6732 18.5534ZM3.41987 19.2934C4.04014 18.6942 4.58627 18.0227 5.04654 17.2934C5.68961 16.0877 6.06482 14.7574 6.14654 13.3934V10.1C6.1201 9.31871 6.25115 8.54007 6.5319 7.81046C6.81265 7.08086 7.23734 6.41521 7.7807 5.85315C8.32406 5.2911 8.97496 4.84413 9.69466 4.53887C10.4144 4.2336 11.1881 4.07629 11.9699 4.07629C12.7516 4.07629 13.5254 4.2336 14.2451 4.53887C14.9648 4.84413 15.6157 5.2911 16.159 5.85315C16.7024 6.41521 17.1271 7.08086 17.4078 7.81046C17.6886 8.54007 17.8196 9.31871 17.7932 10.1V13.3934C17.8749 14.7574 18.2501 16.0877 18.8932 17.2934C19.3535 18.0227 19.8996 18.6942 20.5199 19.2934H3.41987Z"
                    fill="#FFA412"
                  />
                  <path
                    d="M11.9996 22.8533C12.4195 22.8436 12.8225 22.6857 13.1373 22.4075C13.4521 22.1294 13.6583 21.7488 13.7196 21.3333H10.2129C10.2759 21.7601 10.4918 22.1496 10.8204 22.4292C11.1491 22.7088 11.5681 22.8595 11.9996 22.8533Z"
                    fill="#FFA412"
                  />
                </svg>
           
            </IconButton>

            {/* User Profile */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, sm: 1.5, md: 2 },
                cursor: "pointer",
                borderRadius: "8px",
                padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px" },
              }}
            >
              <Avatar 
                src="/per.png" 
                sx={{ 
                  width: { xs: 40, sm: 50, md: 60 }, 
                  height: { xs: 40, sm: 50, md: 60 }, 
                  flexShrink: 0,
                  borderRadius: "8px" 
                }} 
              />

          
              <Box sx={{ 
                display: { xs: "none", sm: "flex" }, 
                alignItems: "center", 
                width: { sm: 120, md: 146 },
                height: { sm: 40, md: 48 },
                position: "relative",
                opacity: 1
              }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={{ 
                    color: "#151D48",
                    fontFamily: "Poppins",
                    fontSize: { sm: "14px", md: "16px" },
                    fontWeight: 500,
                    lineHeight: "24px"
                  }}>
                    Musfiq
                  </Typography>
                  <Typography sx={{ 
                    color: "#737791",
                    fontFamily: "Poppins",
                    fontSize: { sm: "12px", md: "14px" },
                    fontWeight: 400,
                    lineHeight: "20px"
                  }}>
                    Admin
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", ml: { sm: 1, md: 2 } }}>
                  <ArrowDownIcon sx={{ fontSize: { sm: 14, md: 16 }, color: "#737791" }} />
                </Box>
              </Box>
            </Box>
            </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 }, borderRadius: 0 }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRadius: 0,
              border: "none",
              boxShadow: "none",
              backgroundColor: "white",
            },
          }}
        >
          <Sidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRadius: 0,
              border: "none",
              boxShadow: "none",
              backgroundColor: "white",
            },
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: { xs: "80px", sm: "100px", md: "120px" },
          minHeight: { xs: "calc(100vh - 80px)", sm: "calc(100vh - 100px)", md: "calc(100vh - 120px)" },
          backgroundColor: "#F8FAFC",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

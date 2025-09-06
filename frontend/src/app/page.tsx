"use client"

import { Box } from "@mui/material"
import DashboardLayout from "@/components/layout/DashboardLayout"
import DashboardContent from "@/components/dashboard/DashboardContent"

export default function HomePage() {
  return (
    <DashboardLayout>
      <Box sx={{ flexGrow: 1 }}>
        <DashboardContent />
      </Box>
    </DashboardLayout>
  )
}

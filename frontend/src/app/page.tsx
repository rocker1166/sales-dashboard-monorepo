"use client"

import { Box } from "@mui/material"
import DashboardLayout from "@/components/layout/DashboardLayout"
import DashboardContent from "@/components/dashboard/DashboardContent"
import OptimalViewModal from "@/components/ui/OptimalViewModal"

export default function HomePage() {
  return (
    <DashboardLayout>
      <Box sx={{ flexGrow: 1 }}>
        <DashboardContent />
      </Box>
      <OptimalViewModal />
    </DashboardLayout>
  )
}

"use client"

import { Box } from "@mui/material"
import DynamicDashboardLayout from "@/components/layout/DynamicDashboardLayout"
import DashboardContent from "@/components/dashboard/DashboardContent"
import OptimalViewModal from "@/components/ui/OptimalViewModal"

export default function HomePage() {
  return (
    <DynamicDashboardLayout>
      <Box sx={{ flexGrow: 1 }}>
        <DashboardContent />
      </Box>
      <OptimalViewModal />
    </DynamicDashboardLayout>
  )
}

'use client';

import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

const DashboardLayout = dynamic(() => import('./DashboardLayout'), {
  ssr: false,
  loading: () => (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#F8FAFC'
    }}>
      <div>Loading...</div>
    </Box>
  )
});

export default DashboardLayout;

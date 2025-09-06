/**
 * Loading Spinner Component
 * Reusable loading component with different sizes and styles
 */

import { Box, CircularProgress, Typography } from '@mui/material';

interface LoadingSpinnerProps {
  size?: number;
  message?: string;
  fullHeight?: boolean;
}

export default function LoadingSpinner({ 
  size = 40, 
  message = 'Loading...', 
  fullHeight = false 
}: LoadingSpinnerProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        padding: 3,
        minHeight: fullHeight ? '200px' : 'auto',
        width: '100%',
      }}
    >
      <CircularProgress 
        size={size} 
        sx={{ 
          color: '#4079ED',
        }} 
      />
      {message && (
        <Typography
          variant="body2"
          sx={{
            color: '#737791',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
          }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
}

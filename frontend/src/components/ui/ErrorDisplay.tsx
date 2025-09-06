/**
 * Error Display Component
 * Reusable error component with retry functionality
 */

import { Box, Typography, Button, Alert } from '@mui/material';
import { Refresh } from '@mui/icons-material';

interface ErrorDisplayProps {
  message: string;
  onRetry?: () => void;
  fullHeight?: boolean;
  showRetry?: boolean;
}

export default function ErrorDisplay({ 
  message, 
  onRetry, 
  fullHeight = false,
  showRetry = true 
}: ErrorDisplayProps) {
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
      <Alert 
        severity="error" 
        sx={{ 
          width: '100%',
          maxWidth: '400px',
          '& .MuiAlert-message': {
            width: '100%',
          }
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#d32f2f',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            textAlign: 'center',
          }}
        >
          {message}
        </Typography>
      </Alert>
      
      {showRetry && onRetry && (
        <Button
          variant="outlined"
          startIcon={<Refresh />}
          onClick={onRetry}
          sx={{
            borderColor: '#C3D3E2',
            color: '#0F3659',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '14px',
            borderRadius: '8px',
            padding: '8px 16px',
            fontFamily: "'Poppins', sans-serif",
            '&:hover': {
              borderColor: '#A8B8C8',
              backgroundColor: '#F8F9FA'
            }
          }}
        >
          Retry
        </Button>
      )}
    </Box>
  );
}

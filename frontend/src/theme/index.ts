import { createTheme } from "@mui/material/styles"

// Dabang brand colors from the design
const palette = {
  primary: {
    main: "#6366F1", // Indigo-500 (main purple from sidebar)
    light: "#818CF8", // Indigo-400
    dark: "#4F46E5", // Indigo-600
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#10B981", // Emerald-500 (green accents)
    light: "#34D399", // Emerald-400
    dark: "#059669", // Emerald-600
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#F8FAFC", // Slate-50
    paper: "#FFFFFF",
  },
  text: {
    primary: "#1E293B", // Slate-800
    secondary: "#64748B", // Slate-500
  },
  grey: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
  },
  success: {
    main: "#10B981",
    light: "#D1FAE5",
    dark: "#059669",
  },
  warning: {
    main: "#F59E0B",
    light: "#FEF3C7",
    dark: "#D97706",
  },
  error: {
    main: "#EF4444",
    light: "#FEE2E2",
    dark: "#DC2626",
  },
  info: {
    main: "#3B82F6",
    light: "#DBEAFE",
    dark: "#2563EB",
  },
}

const typography = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: "1.75rem",
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h6: {
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.5,
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.4,
  },
}

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none" as const,
        borderRadius: 8,
        fontWeight: 500,
        padding: "8px 16px",
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "0 2px 8px rgba(99, 102, 241, 0.24)",
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        border: "1px solid #E2E8F0",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: 8,
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        fontWeight: 500,
      },
    },
  },
}

export const theme = createTheme({
  palette,
  typography,
  components,
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
})

export default theme

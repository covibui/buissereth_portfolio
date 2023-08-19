import { createTheme } from "@mui/material";
import { Poppins } from "next/font/google";
import palette from "./palette";

export const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export default createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "info",
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: 0,
            py: 1.25,
            fontSize: 16,
            fontWeight: 600,
            textTransform: "unset",
          }),
        containedPrimary: ({ theme }) =>
          theme.unstable_sx({
            "&:focus-visible": {
              background: theme.palette.primary.dark,
              outline: `2px solid ${theme.palette.primary.main}`,
            },
          }),
        containedInfo: ({ theme }) =>
          theme.unstable_sx({
            "&:focus-visible": {
              background: theme.palette.info.dark,
              outline: `2px solid ${theme.palette.info.main}`,
            },
          }),
        sizeMedium: {
          "&:focus-visible": {
            outlineOffset: 2,
          },
        },
        sizeLarge: ({ theme }) =>
          theme.unstable_sx({
            fontSize: 20,
            px: 4,
            py: 2,
            "&:focus-visible": {
              outlineOffset: 4,
            },
          }),
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            mx: "auto",
            my: 4,
            width: 1,
            maxWidth: 360,
            height: 6,
            border: "none",
            borderRadius: 1,
            background: palette.blueGrey[600],
          }),
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
    MuiToolbar: {
      defaultProps: {
        sx: {
          p: { xs: 0 },
          width: 1,
          height: 96,
        },
      },
    },
  },
  palette: {
    primary: {
      main: palette.orange[600],
      light: palette.orange[500],
      dark: palette.orange[700],
      contrastText: palette.white,
    },
    info: {
      main: palette.white,
      dark: palette.blueGrey[200],
      contrastText: palette.black,
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      marginBottom: 16,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      marginBottom: 16,
    },
  },
});

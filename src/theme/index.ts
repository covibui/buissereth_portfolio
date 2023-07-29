import { createTheme } from "@mui/material";
import { Poppins } from "next/font/google";

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
            lg: 1236,
            xl: 1536,
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
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
    typography: {
        fontFamily: poppins.style.fontFamily,
    },
});

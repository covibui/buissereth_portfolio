import { Box, Button, Typography } from "@mui/material";
import palette from "@/theme/palette";
import { CONTACT_EMAIL, NAME } from "@/lib/constants";

export default function ContactSection() {
    return (
        <Box
            component="section"
            id="contact"
            sx={{
                my: 6,
                px: {
                    xs: 2.5,
                    md: 6,
                },
                py: {
                    xs: 6,
                    md: 12,
                },
                background: palette.blueGrey[900],
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    mb: 2.5,
                    borderBottom: 4,
                    borderColor: palette.blueGrey[600],
                    pb: 2,
                    color: palette.white,
                }}
            >
                Get in touch if I seem like a good fit for your project or team.
            </Typography>
            <Typography
                sx={{
                    mb: 6,
                    color: palette.white,
                    fontSize: "1.25rem",
                }}
            >
                My inbox is always open if you have something you would like to
                discuss or just feel like saying hello.
            </Typography>
            <Button
                size="large"
                href={`mailto:${CONTACT_EMAIL}?subject=${NAME} - Collaboration Interest`}
            >
                {CONTACT_EMAIL}
            </Button>
        </Box>
    );
}
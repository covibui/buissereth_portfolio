import palette from "@/theme/palette";
import hexToRGBA from "@/utils/hexToRGBA";
import { Alert, AlertTitle, Box, Typography } from "@mui/material";
import FAIcon from "./FAIcon";

export default function ProjectDisclaimer() {
  return (
    <Box sx={{ p: 4 }}>
      <Alert
        severity="warning"
        sx={{
          position: "relative",
          mx: "auto",
          maxWidth: 1130,
          p: 0,
          overflow: "hidden",
          background: hexToRGBA(palette.orange[600], 0.1),
          boxShadow: "4px 4px 4px 0px rgba(102, 102, 102, 0.20)",
          color: palette.black,
          fontSize: 14,
          lineHeight: "normal",
          "& .MuiAlert-message": {
            p: 3,
            borderLeft: `16px solid ${palette.orange[600]}`,
          },
        }}
        icon={false}
      >
        <AlertTitle
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mt: 0,
            mb: 2,
            color: palette.black,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          <FAIcon
            icon="circle-exclamation"
            sx={{ color: palette.orange[600], fontSize: 24, p: 0 }}
          />
          Disclaimer
        </AlertTitle>
        <Typography sx={{ fontSize: `${14 / 16}rem` }}>
          The digital content presented below has undergone modifications and
          alterations to safeguard the confidentiality and privacy of the
          involved parties. Any identifiable information has been intentionally
          removed or replaced to ensure anonymity and protect the clients&apos;
          identities. These precautions have been taken to uphold the utmost
          confidentiality and respect for all parties depicted in the content.
        </Typography>
      </Alert>
    </Box>
  );
}

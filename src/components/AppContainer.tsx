import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AppContainer({ children }: Props) {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          columnGap: 2.5,
          px: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              md: "2 / span 10",
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Container>
  );
}

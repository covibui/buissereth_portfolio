import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AppContainer({ children }: Props) {
  return (
    <Container maxWidth="xl" disableGutters>
      <Grid container>
        <Grid xs={12} md={10} mdOffset={1}>
          <Box sx={{ px: { xs: 2, md: 0 } }}>{children}</Box>
        </Grid>
      </Grid>
    </Container>
  );
}

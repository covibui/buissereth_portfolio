import { Box, Toolbar } from "@mui/material";
import { ReactNode } from "react";
import AppContainer from "../AppContainer";

interface Props {
  children: ReactNode;
}

export default function ContentSectionWrapper({ children }: Props) {
  return (
    <Box
      sx={{
        scrollSnapAlign: "start",
        minHeight: "100vh",
      }}
    >
      <Toolbar />
      <AppContainer>
        <p>content wrapper</p>
        {children}
      </AppContainer>
    </Box>
  );
}

import { TitleBreakSection } from "@/types";
import { Box, Typography } from "@mui/material";
import DescriptionContent from "./DescriptionContent";
import AppContainer from "../AppContainer";

interface Props {
  section: TitleBreakSection;
}

export default function ProjectTitleBreakSection({ section }: Props) {
  const { subtitle, description } = section;

  return (
    <AppContainer>
      <Box sx={{ pt: 16, flexGrow: 1 }}>
        <Typography variant="projectSubtitle" sx={{ textAlign: "center" }}>
          {subtitle}
        </Typography>
        <>
          {Array.isArray(description) ? (
            <Box
              sx={{
                display: { md: "grid" },
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                columnGap: 4,
                rowGap: 8,
              }}
            >
              {description.map((item, idx) => (
                <Box key={idx} sx={{ mb: { xs: 2, lg: 0 } }}>
                  <DescriptionContent description={item} />
                </Box>
              ))}
            </Box>
          ) : (
            <DescriptionContent description={description} />
          )}
        </>
      </Box>
    </AppContainer>
  );
}

import { TwoColumnSection } from "@/types";
import convertToKebabCase from "@/utils/convertToKebabCase";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DescriptionContent from "./DescriptionContent";

interface Props {
  section: TwoColumnSection;
}

export default function ProjectTwoColumnSection({ section }: Props) {
  const { subtitle, description, variant } = section;
  const ImageColumn = () => (
    <Grid xs={10} md={5}>
      <div>image col</div>
    </Grid>
  );

  const TextColumn = () => (
    <Grid xs={10} md={5}>
      <Box
        sx={{
          display: { md: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          height: {
            md: 1,
          },
        }}
      >
        <Typography variant="projectSubtitle">{subtitle}</Typography>
        <DescriptionContent description={description} />
      </Box>
    </Grid>
  );

  return (
    <Grid
      component="section"
      id={convertToKebabCase(subtitle)}
      container
      spacing={2.5}
      columns={10}
      sx={{ flexGrow: 1 }}
    >
      {variant === "left" ? (
        <>
          <ImageColumn />
          <TextColumn />
        </>
      ) : (
        <>
          <TextColumn />
          <ImageColumn />
        </>
      )}
    </Grid>
  );
}

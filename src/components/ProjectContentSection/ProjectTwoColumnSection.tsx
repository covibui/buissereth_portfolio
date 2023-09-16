import { TwoColumnSection } from "@/types";
import convertToKebabCase from "@/utils/convertToKebabCase";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DescriptionContent from "./DescriptionContent";
import useGetImagePath from "@/hooks/useGetImagePath";
import Image from "next/image";
import { theme } from "@/theme";
import AppContainer from "../AppContainer";

interface Props {
  section: TwoColumnSection;
}

export default function ProjectTwoColumnSection({ section }: Props) {
  const { subtitle, description, image, variant } = section;
  const breakpoints = theme.breakpoints.values;
  const isScreenMd = useMediaQuery(theme.breakpoints.up("md"));

  const imagePath = useGetImagePath(image);

  const ImageColumn = () => (
    <Grid xs={10} md={5}>
      <Box sx={{ display: "flex", alignItems: "center", height: 1 }}>
        <Box
          sx={{
            position: "relative",
            aspectRatio: 1 / 1.5,
            maxWidth: {
              xs: "75vw",
              lg: "auto",
            },
            mx: "auto",
            flexGrow: 1,
          }}
        >
          <Image
            fill
            src={imagePath}
            sizes={`(max-width: ${breakpoints.md}): 50vw, 60vw`}
            alt={image.alt}
            style={{
              objectFit: "contain",
              position: "absolute",
            }}
          />
        </Box>
      </Box>
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
    <AppContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: { md: "100vh" },
        }}
      >
        <Grid
          component="section"
          id={convertToKebabCase(subtitle)}
          container
          spacing={5}
          columns={10}
          sx={{ flexGrow: 1 }}
        >
          {variant === "left" && isScreenMd ? (
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
      </Box>
    </AppContainer>
  );
}

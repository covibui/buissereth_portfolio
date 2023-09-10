import { theme } from "@/theme";
import palette from "@/theme/palette";
import { CoverSection } from "@/types";
import hexToRGBA from "@/utils/hexToRGBA";
import { Box, Toolbar, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import DescriptionContent from "./DescriptionContent";
import useGetImagePath from "@/hooks/useGetImagePath";

interface Props {
  section: CoverSection;
}

export default function ProjectCoverSection({ section }: Props) {
  const { title, subtitle, description, hero, variant, color } = section;
  const breakpoints = theme.breakpoints.values;
  const isScreenMd = useMediaQuery(theme.breakpoints.up("md"));

  const heroImagePath = useGetImagePath(hero);
  const overlayColor = hexToRGBA(color, 0.5);

  const CoverTextContent = () => (
    <>
      <Typography variant="projectTitle">{title}</Typography>
      {subtitle && (
        <Typography
          variant="projectSubtitle"
          sx={{
            mb: 2,
            fontSize: { xs: "1.5rem", md: "2.25rem" },
            fontWeight: 600,
          }}
        >
          {subtitle}
        </Typography>
      )}
      {description && <DescriptionContent description={description} />}
    </>
  );

  const HeroImage = () => (
    <Image
      fill
      src={heroImagePath}
      sizes={`(max-width: ${breakpoints.md}): 50vw, 60vw`}
      alt={hero.alt}
      style={{
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  return (
    <Box
      sx={[
        {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        },
        variant === "vertical" && {
          px: { md: 2.5 },
        },
      ]}
    >
      <Toolbar />
      {variant === "horizontal" || !isScreenMd ? (
        <>
          <Box
            component="section"
            id="hero"
            sx={{
              position: "relative",
              height: 1,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Grid
              container
              sx={{
                width: 1,
                position: "relative",
                mt: { xs: 30, md: 0 },
                zIndex: 2,
                background: palette.white,
              }}
            >
              <Grid xs={12} md={10} mdOffset={1}>
                <Box sx={{ my: 8, px: { xs: 2, md: 0 } }}>
                  <CoverTextContent />
                </Box>
              </Grid>
            </Grid>
            <Box>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  width: 1,
                  height: 1,
                  background: overlayColor,
                  zIndex: 1,
                }}
              />
              <HeroImage />
            </Box>
          </Box>
        </>
      ) : (
        <Grid
          container
          spacing={5}
          columns={12}
          sx={{ mt: 0, height: 1, flexGrow: 1 }}
        >
          <Grid md={5} mdOffset={1}>
            <Box
              sx={{
                display: {
                  md: "flex",
                },
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                height: {
                  md: 1,
                },
                pr: {
                  md: 2,
                },
              }}
            >
              <CoverTextContent />
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={6}
            sx={{ my: { md: -2.5 }, pr: { md: 0 }, mb: { xs: 0, md: 0 } }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                aspectRatio: { xs: 1, md: "unset" },
                height: { md: 1 },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: 1,
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: 1,
                    height: 1,
                    background: overlayColor,
                    zIndex: 1,
                  }}
                />
                <HeroImage />
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

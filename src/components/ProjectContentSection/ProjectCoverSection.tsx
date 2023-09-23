import { theme } from "@/theme";
import palette from "@/theme/palette";
import { CoverSection } from "@/types";
import hexToRGBA from "@/utils/hexToRGBA";
import {
  Box,
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
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
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={[
          {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh",
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
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(12, 1fr)",
                  columnGap: 2.5,
                  position: "relative",
                  mt: { xs: 30, md: 0 },
                  px: { xs: 2, md: 0 },
                  zIndex: 2,
                  background: palette.white,
                }}
              >
                <Box
                  sx={{
                    gridColumn: { xs: "span 12", md: "2 / span 10" },
                    py: 8,
                  }}
                >
                  <CoverTextContent />
                </Box>
              </Box>
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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              columnGap: 2.5,
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                gridColumn: "2 / span 5",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                height: 1,
              }}
            >
              <CoverTextContent />
            </Box>
            <Box
              sx={{
                gridColumn: "span 6",
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
          </Box>
        )}
      </Box>
    </Container>
  );
}

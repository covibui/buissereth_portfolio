import theme from "@/theme";
import palette from "@/theme/palette";
import { CoverSection } from "@/types";
import hexToRGBA from "@/utils/hexToRGBA";
import {
  Box,
  Divider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  section: CoverSection;
}

export default function ProjectCoverSection({ section }: Props) {
  const router = useRouter();
  const breakpoints = theme.breakpoints.values;
  const isScreenMd = useMediaQuery(theme.breakpoints.up("md"));

  const CoverTextContent = () => (
    <>
      <Typography
        variant="h1"
        sx={{
          mb: 2,
          fontSize: { xs: "2rem", md: "4rem" },
          fontWeight: 700,
          lineHeight: 1.3,
        }}
      >
        {section.title}
      </Typography>
      {section.subtitle && (
        <Typography
          sx={{
            mb: 2,
            fontSize: { xs: "1.5rem", md: "2.25rem" },
            fontWeight: 600,
          }}
        >
          {section.subtitle}
        </Typography>
      )}
      {section.description && <Typography>{section.description}</Typography>}
    </>
  );

  return (
    <Box
      sx={[
        {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
          scrollSnapAlign: { md: "start" },
        },
        section.variant === "vertical" && {
          px: { md: 1.25 },
        },
      ]}
    >
      <Toolbar />
      {section.variant === "horizontal" || !isScreenMd ? (
        <>
          <Box
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
              <Grid xs={12} mdOffset={1}>
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
                  background: hexToRGBA(section.color, 0.5),
                  zIndex: 1,
                }}
              />
              <Image
                fill
                src={`/images${router.asPath}${section.hero.file}`}
                sizes={`(max-width: ${breakpoints.md}): 50vw, 60vw`}
                alt={section.hero.alt}
                style={{
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            </Box>
          </Box>
        </>
      ) : (
        <Grid
          container
          spacing={2.5}
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
          <Grid xs={12} md={6} sx={{ my: { md: -1.25 }, pr: { md: 0 } }}>
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
                    background: hexToRGBA(section.color, 0.5),
                    zIndex: 1,
                  }}
                />
                <Image
                  fill
                  src={`/images${router.asPath}${section.hero.file}`}
                  sizes={`(max-width: ${breakpoints.md}): 50vw, 60vw`}
                  alt={section.hero.alt}
                  style={{
                    objectFit: "cover",
                    position: "absolute",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

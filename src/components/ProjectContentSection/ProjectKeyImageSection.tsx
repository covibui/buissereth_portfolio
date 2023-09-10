import { KeyImageSection } from "@/types";
import convertToKebabCase from "@/utils/convertToKebabCase";
import { Box, Toolbar, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DescriptionContent from "./DescriptionContent";
import Image from "next/image";
import useGetImagePath from "@/hooks/useGetImagePath";
import { theme } from "@/theme";
import palette from "@/theme/palette";
import AppContainer from "../AppContainer";

interface Props {
  section: KeyImageSection;
}

export default function ProjectKeyImageSection({ section }: Props) {
  const { subtitle, description, image } = section;
  const breakpoints = theme.breakpoints.values;
  console.log(description);

  const imagePath = useGetImagePath(image);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: { md: "100vh" },
      }}
    >
      <Box
        component="section"
        id={convertToKebabCase(subtitle)}
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <AppContainer>
          <Grid container spacing={2.5} columns={10}>
            <Grid xs={10} md={8} mdOffset={1}>
              <Box sx={{ pt: 16 }}>
                <Typography
                  variant="projectSubtitle"
                  sx={[{ textAlign: "center" }, !description && { mb: 8 }]}
                >
                  {subtitle}
                </Typography>
                {description && (
                  <>
                    {Array.isArray(description) ? (
                      <Box
                        sx={{
                          display: { lg: "grid" },
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
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
                )}
              </Box>
            </Grid>
          </Grid>
        </AppContainer>
        <Box
          sx={{
            pt: 20,
            px: 1.25,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Grid
            container
            spacing={2.5}
            sx={{
              pb: 0,
              background: palette.blueGrey[100],
            }}
          >
            <Grid
              xs={12}
              sm={10}
              smOffset={1}
              lg={8}
              lgOffset={2}
              sx={{ mt: -12, pb: 0 }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    sx={{
                      position: "relative",
                      aspectRatio: 4 / 3,
                      maxWidth: "auto",
                      width: 1,
                    }}
                  >
                    <Image
                      fill
                      src={imagePath}
                      sizes={`(max-width: ${breakpoints.sm}): 50vw, 100vw`}
                      alt={image.alt}
                      style={{
                        objectFit: "contain",
                        position: "absolute",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

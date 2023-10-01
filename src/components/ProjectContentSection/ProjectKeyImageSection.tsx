import { KeyImageSection } from "@/types";
import convertToKebabCase from "@/utils/convertToKebabCase";
import { Box, Toolbar, Typography, useMediaQuery } from "@mui/material";
import DescriptionContent from "./DescriptionContent";
import Image from "next/image";
import useGetImagePath from "@/hooks/useGetImagePath";
import { theme } from "@/theme";
import palette, { themeShadow } from "@/theme/palette";
import AppContainer from "../AppContainer";

interface Props {
  section: KeyImageSection;
}

export default function ProjectKeyImageSection({ section }: Props) {
  const { subtitle, description, image } = section;
  const breakpoints = theme.breakpoints.values;

  const descriptionItems = description
    ? Array.isArray(description)
      ? description
      : [description]
    : undefined;
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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(10, 1fr)",
              columnGap: 2.5,
              pt: 16,
            }}
          >
            <Box
              sx={{
                gridColumn: {
                  xs: "span 10",
                  md: "2 / span 8",
                },
              }}
            >
              <Typography
                variant="projectSubtitle"
                sx={[{ textAlign: "center" }, !description && { mb: 8 }]}
              >
                {subtitle}
              </Typography>
            </Box>
            {descriptionItems && (
              <Box
                sx={{
                  gridColumn: {
                    xs: "span 10",
                    md: descriptionItems?.length > 2 ? "span 10" : "2 / span 8",
                  },
                  display: { md: "grid" },
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  columnGap: 4,
                  rowGap: 8,
                }}
              >
                {descriptionItems.map((item, idx) => (
                  <Box key={idx} sx={{ mb: { xs: 2, lg: 0 } }}>
                    <DescriptionContent description={item} />
                  </Box>
                ))}
              </Box>
            )}
          </Box>
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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              columnGap: 2.5,
              background: palette.blueGrey[100],
            }}
          >
            <Box
              sx={{
                gridColumn: {
                  xs: "span 12",
                  md: "3 / span 8",
                },
                mt: -12,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    position: "relative",
                    aspectRatio: 4 / 3,
                    maxWidth: "auto",
                    width: 1,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imagePath}
                    alt={image.alt}
                    style={{
                      maxWidth: "100%",
                      boxShadow: image.shadow ? themeShadow : undefined,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

import { TwoColumnSection } from "@/types";
import convertToKebabCase from "@/utils/convertToKebabCase";
import { Box, Typography, useMediaQuery } from "@mui/material";
import DescriptionContent from "./DescriptionContent";
import useGetImagePath from "@/hooks/useGetImagePath";
import Image from "next/image";
import { theme } from "@/theme";
import AppContainer from "../AppContainer";
import { themeShadow } from "@/theme/palette";

interface Props {
  section: TwoColumnSection;
}

export default function ProjectTwoColumnSection({ section }: Props) {
  const { subtitle, description, image, variant } = section;
  const breakpoints = theme.breakpoints.values;
  const isScreenMd = useMediaQuery(theme.breakpoints.up("md"));

  const imagePath = useGetImagePath(image);

  const ImageColumn = ({ right }: { right?: boolean }) => (
    <Box
      sx={{
        gridColumn: {
          xs: "span 10",
          md: `${right ? "6 / " : ""}span 5`,
        },
        display: { md: "flex" },
        alignItems: "center",
      }}
    >
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
            boxShadow: image.shadow ? themeShadow : undefined,
          }}
        />
      </Box>
    </Box>
  );

  const TextColumn = () => (
    <Box
      sx={{
        gridColumn: {
          xs: "span 10",
          md: "span 4",
        },
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
  );

  return (
    <AppContainer>
      <Box
        component="section"
        id={convertToKebabCase(subtitle)}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          columnGap: 2.5,
          minHeight: { md: "100vh" },
        }}
      >
        {variant === "left" && isScreenMd ? (
          <>
            <ImageColumn />
            <TextColumn />
          </>
        ) : (
          <>
            <TextColumn />
            <ImageColumn right />
          </>
        )}
      </Box>
    </AppContainer>
  );
}

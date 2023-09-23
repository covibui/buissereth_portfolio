import { GalleryItem, GallerySection } from "@/types";
import { Box, Typography } from "@mui/material";
import DescriptionContent from "./DescriptionContent";
import useGetImagePath from "@/hooks/useGetImagePath";
import AppContainer from "../AppContainer";
import { themeShadow } from "@/theme/palette";

interface Props {
  section: GallerySection;
}

export default function ProjectGallerySection({ section }: Props) {
  const { subtitle, description, items } = section;

  return (
    <AppContainer>
      <Box sx={{ pt: 16, flexGrow: 1 }}>
        <Typography variant="projectSubtitle" sx={{ textAlign: "center" }}>
          {subtitle}
        </Typography>
        {description && (
          <Box sx={{ mb: 8 }}>
            <DescriptionContent description={description} />
          </Box>
        )}
        <Box
          sx={[
            items.length > 1 && {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              columnGap: 4,
              rowGap: 8,
            },
          ]}
        >
          {items.map((item, idx) => (
            <GallerySectionItem key={idx} item={item} />
          ))}
        </Box>
      </Box>
    </AppContainer>
  );
}

interface GallerySectionItemProps {
  item: GalleryItem;
}

function GallerySectionItem({ item }: GallerySectionItemProps) {
  const { description, image } = item;
  const imagePath = useGetImagePath(image);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 4,
        height: 1,
      }}
    >
      {description && <DescriptionContent description={description} />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imagePath}
        alt={image.alt}
        style={{
          width: "100%",
          height: "auto",
          boxShadow: image.shadow ? themeShadow : undefined,
        }}
      />
    </Box>
  );
}

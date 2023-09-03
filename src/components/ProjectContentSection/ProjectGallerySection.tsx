import { GalleryItem, GallerySection } from "@/types";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DescriptionContent from "./DescriptionContent";
import useGetImagePath from "@/hooks/useGetImagePath";
import Image from "next/image";

interface Props {
  section: GallerySection;
}

export default function ProjectGallerySection({ section }: Props) {
  const { subtitle, items } = section;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="projectSubtitle" sx={{ textAlign: "center" }}>
        {subtitle}
      </Typography>
      <Box
        sx={[
          items.length > 1 && {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
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
      <DescriptionContent description={description} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imagePath}
        alt={image.alt}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Box>
  );
}

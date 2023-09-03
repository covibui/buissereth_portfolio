import { Box, Toolbar, useMediaQuery } from "@mui/material";
import { ReactNode } from "react";
import AppContainer from "../AppContainer";
import {
  ContentSection,
  CoverSection,
  GallerySection,
  KeyImageSection,
  SectionType,
  TwoColumnSection,
} from "@/types";
import ProjectCoverSection from "./ProjectCoverSection";
import ProjectKeyImageSection from "./ProjectKeyImageSection";
import ProjectTwoColumnSection from "./ProjectTwoColumnSection";
import { theme } from "@/theme";
import ProjectGallerySection from "./ProjectGallerySection";

interface Props {
  section: ContentSection;
}

export default function ProjectContentSection({ section }: Props) {
  const isScreenMd = useMediaQuery(theme.breakpoints.up("md"));

  const ContentSectionWrapper = ({ children }: { children: ReactNode }) => (
    <AppContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: { md: "100vh" },
        }}
      >
        {isScreenMd && <Toolbar />}
        {children}
      </Box>
    </AppContainer>
  );
  const SectionContentByType: Record<SectionType, ReactNode> = {
    [SectionType.Cover]: (
      <ProjectCoverSection section={section as CoverSection} />
    ),
    [SectionType.Gallery]: (
      <ContentSectionWrapper>
        <ProjectGallerySection section={section as GallerySection} />
      </ContentSectionWrapper>
    ),
    [SectionType.KeyImage]: (
      <ProjectKeyImageSection section={section as KeyImageSection} />
    ),
    [SectionType.TitleBreak]: (
      <ContentSectionWrapper>
        <p>title break</p>
      </ContentSectionWrapper>
    ),
    [SectionType.TwoColumn]: (
      <ContentSectionWrapper>
        <ProjectTwoColumnSection section={section as TwoColumnSection} />
      </ContentSectionWrapper>
    ),
  };
  return SectionContentByType[section.type];
}

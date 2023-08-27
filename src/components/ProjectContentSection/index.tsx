import { Box, Toolbar } from "@mui/material";
import { ReactNode } from "react";
import AppContainer from "../AppContainer";
import {
  ContentSection,
  CoverSection,
  SectionType,
  TwoColumnSection,
} from "@/types";
import ProjectCoverSection from "./ProjectCoverSection";
import ProjectTwoColumnSection from "./ProjectTwoColumnSection";

interface Props {
  section: ContentSection;
}

export default function ProjectContentSection({ section }: Props) {
  const ContentSectionWrapper = ({ children }: { children: ReactNode }) => (
    <AppContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </AppContainer>
  );
  const SectionContentByType: Record<SectionType, ReactNode> = {
    [SectionType.Cover]: (
      <ProjectCoverSection section={section as CoverSection} />
    ),
    [SectionType.TwoColumn]: (
      <ContentSectionWrapper>
        <ProjectTwoColumnSection section={section as TwoColumnSection} />
      </ContentSectionWrapper>
    ),
    [SectionType.Gallery]: (
      <ContentSectionWrapper>
        <p>gallery</p>
      </ContentSectionWrapper>
    ),
    [SectionType.TitleBreak]: (
      <ContentSectionWrapper>
        <p>title break</p>
      </ContentSectionWrapper>
    ),
    [SectionType.KeyImage]: (
      <ContentSectionWrapper>
        <p>key image</p>
      </ContentSectionWrapper>
    ),
  };
  return SectionContentByType[section.type];
}

import { ReactNode } from "react";
import {
  ContentSection,
  CoverSection,
  GallerySection,
  KeyImageSection,
  SectionType,
  TitleBreakSection,
  TwoColumnSection,
} from "@/types";
import ProjectCoverSection from "./ProjectCoverSection";
import ProjectKeyImageSection from "./ProjectKeyImageSection";
import ProjectTwoColumnSection from "./ProjectTwoColumnSection";
import ProjectGallerySection from "./ProjectGallerySection";
import ProjectTitleBreakSection from "./ProjectTitleBreakSection";

interface Props {
  section: ContentSection;
}

export default function ProjectContentSection({ section }: Props) {
  const SectionContentByType: Record<SectionType, ReactNode> = {
    [SectionType.Cover]: (
      <ProjectCoverSection section={section as CoverSection} />
    ),
    [SectionType.Gallery]: (
      <ProjectGallerySection section={section as GallerySection} />
    ),
    [SectionType.KeyImage]: (
      <ProjectKeyImageSection section={section as KeyImageSection} />
    ),
    [SectionType.TitleBreak]: (
      <ProjectTitleBreakSection section={section as TitleBreakSection} />
    ),
    [SectionType.TwoColumn]: (
      <ProjectTwoColumnSection section={section as TwoColumnSection} />
    ),
  };
  return SectionContentByType[section.type];
}

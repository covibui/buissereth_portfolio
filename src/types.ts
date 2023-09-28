export enum ProjectCategory {
  Work = "work",
  School = "school",
  // TODO: uncomment when ready to add `Other` projects
  // Other = "other",
}

export interface Image {
  file: string;
  alt: string;
  title?: string;
  caption?: string;
  shadow?: boolean;
}

export enum SectionType {
  Cover = "cover",
  Gallery = "gallery",
  KeyImage = "key-image",
  TitleBreak = "title-break",
  TwoColumn = "two-column",
  Video = "video",
}

export interface Section {
  type: SectionType;
  subtitle?: string;
  description?: string;
}

export interface CoverSection extends Section {
  type: SectionType.Cover;
  title: string;
  hero: Image;
  variant: "vertical" | "horizontal";
  color: string;
}

export interface GalleryItem {
  description?: string;
  image: Image;
}

export interface GallerySection extends Section {
  type: SectionType.Gallery;
  subtitle: string;
  items: GalleryItem[];
}

export interface KeyImageSection extends Omit<Section, "description"> {
  type: SectionType.KeyImage;
  subtitle: string;
  description?: string | string[];
  image: Image;
}

export interface TitleBreakSection extends Omit<Section, "description"> {
  type: SectionType.TitleBreak;
  subtitle: string;
  description: string | string[];
}

export interface TwoColumnSection extends Section {
  type: SectionType.TwoColumn;
  subtitle: string;
  description: string;
  variant: "left" | "right";
  image: Image;
}

export interface VideoSection extends Pick<Section, "type" | "subtitle"> {
  type: SectionType.Video;
  subtitle: string;
  videoId: string;
}

export type ContentSection =
  | CoverSection
  | GallerySection
  | KeyImageSection
  | TitleBreakSection
  | TwoColumnSection
  | VideoSection;

export enum ProjectType {
  caseStudy = "case-study",
  code = "code",
  design = "design",
  ux = "ux",
}
export interface ProjectFrontMatterData {
  displayOrder: number;
  projectType: ProjectType;
  title: string;
  subtitle?: string;
  description?: string;
  thumb: string;
  hero: Image;
  heroOrientation: "vertical" | "horizontal";
  color: string;
  sections: ContentSection[];
}
export interface ProjectFrontMatter extends ProjectFrontMatterData {
  slug: string;
}

export interface ProjectData {
  frontMatter: ProjectFrontMatter;
  content: any;
}

export interface ProjectGroup {
  slug: string;
  title: string;
  projects: ProjectFrontMatter[];
}

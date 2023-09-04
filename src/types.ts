export enum ProjectType {
  Other = "other",
  School = "school",
  Work = "work",
}

export interface Image {
  file: string;
  alt: string;
}

interface CaptionImage extends Image {
  title: string;
  caption: string;
}

export enum SectionType {
  Cover = "cover",
  Gallery = "gallery",
  KeyImage = "key-image",
  TitleBreak = "title-break",
  TwoColumn = "two-column",
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
  description: string;
  image: Image | CaptionImage;
}

export interface GallerySection extends Omit<Section, "description"> {
  type: SectionType.Gallery;
  subtitle: string;
  items: GalleryItem[];
}

export interface KeyImageSection extends Section {
  type: SectionType.KeyImage;
  subtitle: string;
  description: string;
  image: Image;
}

export interface TitleBreakSection extends Section {
  type: SectionType.TitleBreak;
  subtitle: string;
  description: string;
}

export interface TwoColumnSection extends Section {
  type: SectionType.TwoColumn;
  subtitle: string;
  description: string;
  variant: "left" | "right";
  image: Image;
}

export type ContentSection =
  | CoverSection
  | GallerySection
  | KeyImageSection
  | TitleBreakSection
  | TwoColumnSection;

export interface ProjectFrontMatterData {
  displayOrder: number;
  projectType: "ux" | "code" | "design" | "case-study";
  title: string;
  subtitle?: string;
  description: string;
  summary: string;
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

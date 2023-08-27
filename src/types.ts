export enum ProjectType {
  School = "school",
  Work = "work",
  Other = "other",
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
  TwoColumn = "two-column",
  Gallery = "gallery",
  CaptionGallery = "caption-gallery",
  TitleBreak = "title-break",
  KeyImage = "key-image",
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

export interface TwoColumnSection extends Section {
  type: SectionType.TwoColumn;
  subtitle: string;
  description: string;
  variant: "left" | "right";
  image: Image;
}

export interface GallerySection extends Section {
  type: SectionType.Gallery;
  subtitle: string;
  description: string;
  images: Image[];
}

export interface CaptionGallerySection extends Omit<GallerySection, "type"> {
  type: SectionType.CaptionGallery;
  images: CaptionImage[];
}

export interface TitleBreakSection extends Section {
  type: SectionType.TitleBreak;
  subtitle: string;
  description: string;
}

export interface KeyImageSection extends Section {
  type: SectionType.KeyImage;
  subtitle: string;
  description: string;
  image: Image[];
}

export type ContentSection =
  | CoverSection
  | TwoColumnSection
  | GallerySection
  | CaptionGallerySection
  | TitleBreakSection
  | KeyImageSection;

export interface ProjectFrontMatterData {
  displayOrder: number;
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

export enum ProjectType {
  School = "school",
  Work = "work",
  Other = "other",
}

interface Image {
  file: string;
  alt: string;
}

interface CaptionImage extends Image {
  title: string;
  caption: string;
}

export type SectionType =
  | "Cover"
  | "TwoColumn"
  | "Gallery"
  | "CaptionGallery"
  | "TitleBreak"
  | "KeyImage";

export interface Section {
  type: SectionType;
  subtitle?: string;
  description?: string;
}

export interface CoverSection extends Section {
  type: Extract<SectionType, "Cover">;
  title: string;
  hero: Image;
}

export interface TwoColumnSection extends Section {
  type: Extract<SectionType, "TwoColumn">;
  subtitle: string;
  description: string;
  variant: "left" | "right";
  image: Image;
}

export interface GallerySection extends Section {
  type: Extract<SectionType, "Gallery">;
  subtitle: string;
  description: string;
  images: Image[];
}

export interface CaptionGallerySection extends Omit<GallerySection, "type"> {
  type: Extract<SectionType, "CaptionGallery">;
  images: CaptionImage[];
}

export interface TitleBreakSection extends Section {
  subtitle: string;
  description: string;
}

export interface KeyImageSection extends Section {
  subtitle: string;
  description: string;
  image: Image[];
}

type ContentSection =
  | CoverSection
  | TwoColumnSection
  | GallerySection
  | CaptionGallerySection
  | TitleBreakSection;

export interface ProjectFrontMatterData {
  displayOrder: number;
  title: string;
  subtitle?: string;
  summary: string;
  thumb: string;
  hero: Image;
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

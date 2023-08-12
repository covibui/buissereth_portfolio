export interface PostData {
    id: string;
    content?: string;
    [k: string]: any;
}

export enum ProjectType {
    School = "school",
    Work = "work",
    Other = "other",
}

interface Image {
    image: string;
    imageAlt: string;
    summary?: string;
}

interface KeyFeature extends Image {
    title: string;
    summary: string;
}

export interface ProjectFrontMatterData {
    title: string;
    summary: string;
    thumb: string;
    displayOrder: number;
    roles: string[];
    hero: Image;
    purpose: string;
    keyFeatures: KeyFeature[];
    promoVideo: string;
    gallery: Image[];
    color: string;
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

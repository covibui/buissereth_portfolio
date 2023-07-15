export interface PostData {
    id: string;
    content?: string;
    [k: string]: any;
}

export type ProjectType = "college" | "work";

export interface ProjectData {
    slug: string;
    title: string;
    type: ProjectType;
    displayOrder: number;
    [k: string]: any;
}

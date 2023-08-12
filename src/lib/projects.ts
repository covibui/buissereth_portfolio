import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import {
    ProjectData,
    ProjectFrontMatter,
    ProjectGroup,
    ProjectType,
    ProjectTypes,
} from "@/types";
import groupBy from "lodash/groupBy";

const root = path.join(process.cwd(), "src");
const projectsDirectory = path.join(root, "data/projects");

export function getSortedProjectsByType(
    projectType: string
): ProjectFrontMatter[] {
    const projectTypeDirectory = path.join(projectsDirectory, projectType);
    const fileNames = fs.readdirSync(projectTypeDirectory);

    // @ts-ignore
    const projects: ProjectFrontMatter[] = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");

        const fullPath = path.join(projectTypeDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data } = matter(fileContents);

        return {
            slug,
            ...data,
        };
    });

    return projects.sort((a, b) => {
        if (a.displayOrder < b.displayOrder) {
            return -1;
        } else {
            return 1;
        }
    });
}

export function getSortedProjects(): ProjectGroup[] {
    const groups = Object.entries(ProjectTypes).map(([title, slug]) => {
        return {
            slug: slug,
            title: title,
            projects: getSortedProjectsByType(slug),
        };
    });
    return groups;
}

export async function getProjectBySlug(slug: string) {
    const source = fs.readFileSync(
        path.join(root, "data/projects", `${slug}.md`),
        "utf8"
    );

    const { data, content } = matter(source);

    return {
        frontMatter: {
            slug,
            ...data,
        },
        content,
    };
}

export function getAllProjectSlugs() {
    const fileNames = fs.readdirSync(projectsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

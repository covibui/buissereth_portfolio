import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { ProjectData, ProjectFrontMatter, ProjectType } from "@/types";
import groupBy from "lodash/groupBy";

const root = path.join(process.cwd(), "src");
const projectsDirectory = path.join(root, "data/projects");

export function getSortedProjects(projectType?: ProjectType) {
    const filesNames = fs.readdirSync(projectsDirectory);

    // @ts-ignore
    const allProjects: ProjectFrontMatter[] = filesNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");

        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data } = matter(fileContents);

        return {
            slug,
            ...data,
        };
    });

    const sortedProjects = allProjects.sort((a, b) => {
        if (a.displayOrder < b.displayOrder) {
            return -1;
        } else {
            return 1;
        }
    });

    return groupBy(sortedProjects, "type");
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

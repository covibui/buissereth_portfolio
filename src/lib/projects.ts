import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { ProjectData } from "@/types";

const root = path.join(process.cwd(), "src");
const projectsDirectory = path.join(root, "data/projects");

const sortByDisplayOrder = (projects: ProjectData[]) => {
    return projects.sort((a, b) => {
        if (a.displayOrder < b.displayOrder) {
            return 1;
        } else {
            return -1;
        }
    });
};

export function getSortedProjects() {
    const filesNames = fs.readdirSync(projectsDirectory);

    // @ts-ignore
    const allProjects: ProjectData[] = filesNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");

        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data } = matter(fileContents);

        return {
            slug,
            ...data,
        };
    });

    const collegeProjects = allProjects.filter(
        ({ type }) => type === "college"
    );
    const workProjects = allProjects.filter(({ type }) => type === "work");

    return {
        college: sortByDisplayOrder(collegeProjects),
        work: sortByDisplayOrder(workProjects),
    };
}

export async function getProjectBySlug(projectType: string, slug: string) {
    const source = fs.readFileSync(
        path.join(root, "data/projects", projectType, `${slug}.md`),
        "utf8"
    );

    const { data, content } = matter(source);

    return {
        frontMatter: data,
        markdownBody: content,
    };
}

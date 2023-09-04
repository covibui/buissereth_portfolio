import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  ProjectData,
  ProjectFrontMatter,
  ProjectFrontMatterData,
  ProjectGroup,
} from "@/types";

const root = path.join(process.cwd(), "src");
const projectsDirectory = path.join(root, "data/projects");

export function getSortedProjectsByType(
  projectType: string
): ProjectFrontMatter[] {
  const projectTypeDirectory = path.join(projectsDirectory, projectType);
  let fileNames = fs.readdirSync(projectTypeDirectory);
  const templateIndex = fileNames.indexOf("_template.md");
  if (templateIndex > -1) {
    fileNames.splice(templateIndex, 1);
  }

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
  // * Uncomment below and remove 54-60 when ready to enable school and work projects.
  // const groups = Object.entries(ProjectType).map(([title, slug]) => {
  //     return {
  //         slug: slug,
  //         title: title,
  //         projects: getSortedProjectsByType(slug),
  //     };
  // });
  const groups = [
    {
      slug: "work",
      title: "Work",
      projects: getSortedProjectsByType("work"),
    },
  ];
  return groups;
}

export async function getProjectByTypeAndSlug(
  projectType: string,
  slug: string
): Promise<ProjectData> {
  const source = fs.readFileSync(
    path.join(root, "data/projects", projectType, `${slug}.md`),
    "utf8"
  );

  // @ts-ignore
  const { data, content }: { data: ProjectFrontMatterData; content: string } =
    matter(source);

  return {
    frontMatter: {
      slug,
      ...data,
    },
    content,
  };
}

export function getAllProjectSlugsByType(projectType: string) {
  const projectTypeDirectory = path.join(projectsDirectory, projectType);
  let fileNames = fs.readdirSync(projectTypeDirectory);
  const templateIndex = fileNames.indexOf("_template.md");
  if (templateIndex > -1) {
    fileNames.splice(templateIndex, 1);
  }
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

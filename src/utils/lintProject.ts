import path from "path";
import fs from "fs";
import {
  ContentSection,
  ProjectFrontMatter,
  ProjectType,
  SectionType,
} from "@/types";

class ProjectValidationError extends Error {
  constructor(slug: string, message: string) {
    super(`${slug}: ${message}`);
    this.name = "ProjectValidationError";
  }
}

class ProjectSectionValidationError extends Error {
  constructor(projectSlug: string, sectionName: string, message: string) {
    super(`${projectSlug}: Section ${sectionName}: ${message}`);
    this.name = "ProjectSectionValidationError";
  }
}

const imagesDirectory = path.join(process.cwd(), "public/images/projects");

function lintProjectSection(
  projectSlug: string,
  section: ContentSection,
  imageFiles: string[]
) {
  const validateString = (field: string, value: any) => {
    if (!value || typeof value !== "string" || value.length < 1) {
      throw new ProjectSectionValidationError(
        projectSlug,
        section.slug ? section.slug : "Unknown",
        `"${field}" must be a string at least one character long`
      );
    }
  };

  const validateConditionalString = (field: string, value?: any) => {
    if (value && typeof value !== "string") {
      throw new ProjectSectionValidationError(
        projectSlug,
        section.slug,
        `"${field}" must be a string at least one character long or removed`
      );
    }
  };

  validateString("slug", section.slug);
  if (section.slug.includes(" ")) {
    throw new ProjectSectionValidationError(
      projectSlug,
      section.slug,
      `"slug must contain no space characters`
    );
  }

  if (!section.type || !Object.values(SectionType).includes(section.type)) {
    throw new ProjectSectionValidationError(
      projectSlug,
      section.slug,
      `"type" must be one of ${Object.values(SectionType).join(" || ")}`
    );
  }

  const validateConditionalDescription = (
    description?: string,
    field?: string
  ) => {
    if (description && typeof description !== "string") {
      throw new ProjectSectionValidationError(
        projectSlug,
        section.slug,
        `"${
          field ? field + ".description" : "description"
        }" must be a string at least one character long or removed`
      );
    }
  };

  if (section.type === "gallery") {
    validateString("subtitle", section.subtitle);
    validateConditionalDescription("description", section.description);

    if (!section.items) {
      throw new ProjectSectionValidationError(
        projectSlug,
        section.slug,
        `"items" must include at least one item`
      );
    }

    section.items.forEach((item) => {
      validateConditionalString("item.description", item.description);
    });
  }
}

export default function lintProject(
  projectType: string,
  project: ProjectFrontMatter
) {
  const projectImageDirectory = path.join(
    imagesDirectory,
    projectType,
    project.slug
  );
  const imageFiles = fs.readdirSync(projectImageDirectory);

  const validateNumber = (field: string, value: any) => {
    if (!value || typeof value !== "number") {
      throw new ProjectValidationError(
        project.slug,
        `"${field}" must be a number`
      );
    }
  };

  const validateString = (field: string, value: any) => {
    if (!value || typeof value !== "string" || value.length < 1) {
      throw new ProjectValidationError(
        project.slug,
        `"${field}" must be a string at least one character long`
      );
    }
  };

  const validateConditionalString = (field: string, value?: any) => {
    if (value && typeof value !== "string") {
      throw new ProjectValidationError(
        project.slug,
        `"${field}" must be a string at least one character long or removed`
      );
    }
  };

  const validateImageFile = (field: string, value: any) => {
    if (!value || typeof value !== "string" || !imageFiles.includes(value)) {
      throw new ProjectValidationError(
        project.slug,
        `"${field}" must be a valid file name and included in the project image folder`
      );
    }
  };

  validateNumber("displayOrder", project.displayOrder);

  if (
    !project.projectType ||
    !Object.values(ProjectType).includes(project.projectType)
  ) {
    throw new ProjectValidationError(
      project.slug,
      `"ProjectType" must be one of ${Object.values(ProjectType).join(" || ")}`
    );
  }

  validateString("title", project.title);
  validateConditionalString("subtitle", project.subtitle);
  validateConditionalString("description", project.description);
  validateImageFile("thumb", project.thumb);

  if (!project.hero) {
    throw new ProjectValidationError(project.slug, "`hero` must be defined");
  }
  validateImageFile("hero.file", project.hero.file);
  validateString("hero.alt", project.hero.alt);

  if (
    !project.heroOrientation ||
    !["vertical", "horizontal"].includes(project.heroOrientation)
  ) {
    throw new ProjectValidationError(
      project.slug,
      "`heroOrientation` must be vertical || horizontal"
    );
  }

  if (
    !project.color ||
    typeof project.color !== "string" ||
    project.color.charAt(0) !== "#"
  ) {
    throw new ProjectValidationError(
      project.slug,
      "`color` must be a string beginning with `#`"
    );
  }

  if (!project.sections) {
    throw new ProjectValidationError(
      project.slug,
      "`sections` must include at least one item"
    );
  }

  project.sections.forEach((section) =>
    lintProjectSection(project.slug, section, imageFiles)
  );
}

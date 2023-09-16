import path from "path";
import fs from "fs";
import {
  ContentSection,
  Image,
  ProjectFrontMatter,
  ProjectType,
  SectionType,
} from "@/types";

class ProjectValidationError extends Error {
  constructor(slug: string, field: string, value: any, message: string) {
    super(`${slug} - "${field}" ${message}. Received: ${value}`);
    this.name = "ProjectValidationError";
  }
}

class ProjectSectionValidationError extends Error {
  constructor(
    projectSlug: string,
    sectionIndex: number,
    field: string,
    value: any,
    message: string
  ) {
    super(
      `${projectSlug} - "sections[${sectionIndex}].${field}" ${message}. Received: ${value}`
    );
    this.name = "ProjectSectionValidationError";
  }
}

const imagesDirectory = path.join(process.cwd(), "public/images/projects");

function lintProjectSection(
  projectSlug: string,
  section: ContentSection,
  index: number,
  imageFiles: string[]
) {
  const validateString = (field: string, value: any) => {
    if (!value || typeof value !== "string" || value.length < 1) {
      throw new ProjectSectionValidationError(
        projectSlug,
        index,
        field,
        value,
        "must be a string at least one character long"
      );
    }
  };

  const validateConditionalString = (field: string, value?: any) => {
    if (value && typeof value !== "string") {
      throw new ProjectSectionValidationError(
        projectSlug,
        index,
        field,
        value,
        "must be a string at least one character long or removed"
      );
    }
  };

  const validateImageFile = (field: string, value: any) => {
    if (!value || typeof value !== "string" || !imageFiles.includes(value)) {
      throw new ProjectSectionValidationError(
        projectSlug,
        index,
        field,
        value,
        "must be a valid file name and included in the project image folder"
      );
    }
  };

  const validateImage = (field: string, value: Image) => {
    if (!value) {
      throw new ProjectSectionValidationError(
        projectSlug,
        index,
        field,
        value,
        "must be defined"
      );
    }
    validateImageFile(`${field}.file`, value.file);
    validateString(`${field}.alt`, value.alt);
    if (!value.title && value.caption) {
      throw new ProjectSectionValidationError(
        projectSlug,
        index,
        `${field}.title`,
        value.title,
        `must be defined if using "${field}.caption"`
      );
    }
    if (value.title && !value.caption) {
      throw new ProjectSectionValidationError(
        projectSlug,
        index,
        `${field}.caption`,
        value.caption,
        `must be defined if using "${field}.title"`
      );
    }
    validateConditionalString(`${field}.title`, value.title);
    validateConditionalString(`${field}.caption`, value.caption);
  };

  if (!section.type || !Object.values(SectionType).includes(section.type)) {
    throw new ProjectSectionValidationError(
      projectSlug,
      index,
      "type",
      section.type,
      `must be one of ${Object.values(SectionType).join(" || ")}`
    );
  }

  if (section.type === SectionType.Gallery) {
    validateString("subtitle", section.subtitle);
    validateConditionalString("description", section.description);

    if (!section.items) {
      throw new ProjectSectionValidationError(
        projectSlug,
        index,
        "items",
        section.items,
        "must include at least one item"
      );
    }

    section.items.forEach((item, idx) => {
      validateConditionalString("item.description", item.description);
      validateImage(`items[${idx}].image`, item.image);
    });
  }

  if (section.type === SectionType.KeyImage) {
    validateString("subtitle", section.subtitle);
    if (Array.isArray(section.description)) {
      section.description.forEach((item, idx) => {
        validateString(`description[${idx}]`, item);
      });
    } else {
      validateConditionalString("description", section.description);
    }
    validateImage("image", section.image);
  }

  if (section.type === SectionType.TitleBreak) {
    validateString("subtitle", section.subtitle);
    if (Array.isArray(section.description)) {
      section.description.forEach((item, idx) => {
        validateString(`description[${idx}]`, item);
      });
    } else {
      validateString("description", section.description);
    }
  }

  if (section.type === SectionType.TwoColumn) {
    validateString("subtitle", section.subtitle);
    validateString("description", section.description);
    if (!section.variant || !["left", "right"].includes(section.variant)) {
      throw new ProjectSectionValidationError(
        projectSlug,
        index,
        "variant",
        section.variant,
        "must be left || right"
      );
    }
    validateImage("image", section.image);
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
        field,
        value,
        "must be a number"
      );
    }
  };

  const validateString = (field: string, value: any) => {
    if (!value || typeof value !== "string" || value.length < 1) {
      throw new ProjectValidationError(
        project.slug,
        field,
        value,
        "must be a string at least one character long"
      );
    }
  };

  const validateConditionalString = (field: string, value?: any) => {
    if (value && typeof value !== "string") {
      throw new ProjectValidationError(
        project.slug,
        field,
        value,
        "must be a string at least one character long or removed"
      );
    }
  };

  const validateImageFile = (field: string, value: any) => {
    if (!value || typeof value !== "string" || !imageFiles.includes(value)) {
      throw new ProjectValidationError(
        project.slug,
        field,
        value,
        "must be a valid file name and included in the project image folder"
      );
    }
  };

  const validateImage = (field: string, value: Image) => {
    if (!value) {
      throw new ProjectValidationError(
        project.slug,
        field,
        value,
        "must be defined"
      );
    }
    validateImageFile(`${field}.file`, value.file);
    validateString(`${field}.alt`, value.alt);
    if (!value.title && value.caption) {
      throw new ProjectValidationError(
        project.slug,
        `${field}.title`,
        value.title,
        `must be defined if using "${field}.caption"`
      );
    }
    if (value.title && !value.caption) {
      throw new ProjectValidationError(
        project.slug,
        `${field}.caption`,
        value.caption,
        `must be defined if using "${field}.title"`
      );
    }
    validateConditionalString(`${field}.title`, value.title);
    validateConditionalString(`${field}.caption`, value.caption);
  };

  validateNumber("displayOrder", project.displayOrder);

  if (
    !project.projectType ||
    !Object.values(ProjectType).includes(project.projectType)
  ) {
    throw new ProjectValidationError(
      project.slug,
      "ProjectType",
      project.projectType,
      `must be one of ${Object.values(ProjectType).join(" || ")}`
    );
  }

  validateString("title", project.title);
  validateConditionalString("subtitle", project.subtitle);
  validateConditionalString("description", project.description);
  validateImageFile("thumb", project.thumb);
  validateImage("hero", project.hero);

  if (
    !project.heroOrientation ||
    !["vertical", "horizontal"].includes(project.heroOrientation)
  ) {
    throw new ProjectValidationError(
      project.slug,
      "heroOrientation",
      project.heroOrientation,
      `must be vertical || horizontal`
    );
  }

  if (
    !project.color ||
    typeof project.color !== "string" ||
    project.color.charAt(0) !== "#"
  ) {
    throw new ProjectValidationError(
      project.slug,
      "color",
      project.color,
      `must be a string beginning with "#"`
    );
  }

  if (!project.sections) {
    throw new ProjectValidationError(
      project.slug,
      "sections",
      project.sections,
      `must include at least one item`
    );
  }

  project.sections.forEach((section, index) =>
    lintProjectSection(project.slug, section, index, imageFiles)
  );
}

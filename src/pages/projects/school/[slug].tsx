import ProjectContentSection from "@/components/ProjectContentSection";
import Layout from "@/components/Layout";
import {
  getAllProjectSlugsByType,
  getProjectByTypeAndSlug,
} from "@/lib/projects";
import {
  CoverSection,
  ProjectData,
  ProjectCategory,
  SectionType,
} from "@/types";
import { Box, Divider } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

export default function Project({ frontMatter }: ProjectData) {
  const coverSection: CoverSection = {
    type: SectionType.Cover,
    title: frontMatter.title,
    subtitle: frontMatter.subtitle,
    description: frontMatter.description,
    hero: frontMatter.hero,
    variant: frontMatter.heroOrientation,
    color: frontMatter.color,
  };

  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Box>
        <ProjectContentSection section={coverSection} />
        <Divider />
        {frontMatter.sections.map((section, idx) => (
          <ProjectContentSection key={idx} section={section} />
        ))}
      </Box>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectSlugsByType(ProjectCategory.School);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectSlug = params?.slug as string;
  const { frontMatter, content } = await getProjectByTypeAndSlug(
    ProjectCategory.School,
    projectSlug
  );
  return {
    props: {
      frontMatter,
      content,
    },
  };
};

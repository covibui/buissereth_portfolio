import ProjectContentSection from "@/components/ProjectContentSection";
import Layout from "@/components/Layout";
import {
  getAllProjectSlugsByType,
  getProjectByTypeAndSlug,
} from "@/lib/projects";
import {
  ContentSection,
  CoverSection,
  ProjectData,
  ProjectType,
  SectionType,
} from "@/types";
import { Box } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Project({ frontMatter, content }: ProjectData) {
  const coverSection: CoverSection = {
    type: SectionType.Cover,
    title: frontMatter.title,
    subtitle: frontMatter.subtitle,
    description: frontMatter.description,
    hero: frontMatter.hero,
    variant: frontMatter.heroOrientation,
    color: frontMatter.color,
  };
  const contentSections: ContentSection[] = [
    coverSection,
    ...frontMatter.sections,
  ];
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Box>
        {contentSections.map((section, idx) => (
          <ProjectContentSection key={idx} section={section} />
        ))}
      </Box>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectSlugsByType(ProjectType.Work);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectSlug = params?.slug as string;
  const { frontMatter, content } = await getProjectByTypeAndSlug(
    ProjectType.Work,
    projectSlug
  );
  return {
    props: {
      frontMatter,
      content,
    },
  };
};

import ContentSectionWrapper from "@/components/ContentSections/ContentSectionWrapper";
import Layout from "@/components/Layout";
import {
  getAllProjectSlugsByType,
  getProjectByTypeAndSlug,
} from "@/lib/projects";
import { ProjectData, ProjectType } from "@/types";
import { Box } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Project({ frontMatter, content }: ProjectData) {
  console.log(frontMatter);
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Box sx={{ scrollSnapType: "y mandatory" }}>
        <ContentSectionWrapper>
          <p>foo</p>
        </ContentSectionWrapper>
        <ContentSectionWrapper>
          <p>bar</p>
        </ContentSectionWrapper>
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

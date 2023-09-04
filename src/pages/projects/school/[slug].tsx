import Layout from "@/components/Layout";
import {
  getAllProjectSlugsByType,
  getProjectByTypeAndSlug,
} from "@/lib/projects";
import { ProjectData, ProjectCategory } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Project({ frontMatter, content }: ProjectData) {
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <article>
        <h1>{frontMatter.title}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
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

import Layout from "@/components/Layout";
import { getSortedProjects } from "@/lib/projects";
import { ProjectFrontMatter, ProjectType } from "@/types";
import { GetStaticProps } from "next";

interface Props {
    projects: Record<ProjectType, ProjectFrontMatter[]>;
}

export default function Projects({ projects }: Props) {
    return (
        <Layout>
            <div>Projects</div>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = getSortedProjects();
    return {
        props: {
            projects,
        },
    };
};

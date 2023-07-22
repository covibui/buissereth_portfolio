import Head from "next/head";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { ProjectFrontMatter, ProjectType } from "@/types";
import Link from "next/link";
import { getSortedProjects } from "@/lib/projects";
import { siteTitle } from "@/lib/constants";

interface Props {
    projects: Record<ProjectType, ProjectFrontMatter[]>;
}

export default function Home({ projects }: Props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section>
                    <p>
                        Culpa est amet adipisicing ad. Labore id duis Lorem
                        laboris pariatur laborum Lorem dolor aute voluptate
                        eiusmod esse excepteur qui ex.
                    </p>
                    <p>
                        Non ad ex aute ad ex exercitation. Consequat ea mollit
                        quis mollit minim ut eiusmod voluptate consequat ipsum
                        fugiat exercitation mollit anim laborum. Culpa anim
                        exercitation duis sint enim consequat sint laborum
                        reprehenderit pariatur nisi culpa.
                    </p>
                </section>
                <section>
                    <h2>Blog</h2>
                    <ul>
                        {projects.work.length > 0 &&
                            projects.work.map(({ slug, title, type }, idx) => (
                                <li key={idx}>
                                    <Link href={`/projects/${slug}`}>
                                        {title} - {type}
                                    </Link>
                                </li>
                            ))}
                        {projects.college.length > 0 &&
                            projects.college.map(
                                ({ slug, title, type }, idx) => (
                                    <li key={idx}>
                                        <Link href={`/projects/${slug}`}>
                                            {title} - {type}
                                        </Link>
                                    </li>
                                )
                            )}
                    </ul>
                </section>
            </Layout>
        </>
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

import Head from "next/head";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { ProjectFrontMatter, ProjectType } from "@/types";
import Link from "next/link";
import { getSortedProjects } from "@/lib/projects";
import { SITE_DESCRIPTION, SITE_TITLE, SOCIAL_IMAGE } from "@/lib/constants";
import { Toolbar } from "@mui/material";

interface Props {
    projects: Record<ProjectType, ProjectFrontMatter[]>;
}

export default function Home({ projects }: Props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>{SITE_TITLE}</title>
                    <meta name="description" content={SITE_DESCRIPTION} />
                    <meta
                        name="twitter:description"
                        content={SITE_DESCRIPTION}
                    />
                    <meta name="og:description" content={SITE_DESCRIPTION} />
                    <meta name="twitter:card" content="summary_large_image" />
                    {/* TODO: get actual social image */}
                    {/* <meta name="og:image" content={SOCIAL_IMAGE} />
                    <meta name="og:image:alt" content={SITE_DESCRIPTION} />
                    <meta name="twitter:image" content={SOCIAL_IMAGE} />
                    <meta name="og:twitter:alt" content={SITE_DESCRIPTION} /> */}
                </Head>
                <Toolbar />
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

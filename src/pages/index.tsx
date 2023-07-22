import Head from "next/head";
import utilStyles from "@/styles/utils.module.css";
import Layout, { siteTitle } from "@/components/Layout";
import { GetStaticProps } from "next";
import { ProjectFrontMatter, ProjectType } from "@/types";
import Link from "next/link";
import { getSortedProjects } from "@/lib/projects";

export default function Home({
    projects,
}: {
    projects: Record<ProjectType, ProjectFrontMatter[]>;
}) {
    console.log(projects);
    return (
        <>
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section className={utilStyles.headingMd}>
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
                <section
                    className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
                >
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
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

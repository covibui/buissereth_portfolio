import Head from "next/head";
import utilStyles from "@/styles/utils.module.css";
import Layout, { siteTitle } from "@/components/Layout";
import { getSortedPosts } from "@/lib/posts";
import { GetStaticProps } from "next";
import { PostData, ProjectData, ProjectType } from "@/types";
import Link from "next/link";
import Date from "@/components/Date";
import { getSortedProjects } from "@/lib/projects";

export default function Home({
    allPostsData,
    allProjects,
}: {
    allPostsData: PostData[];
    allProjects: Record<ProjectType, ProjectData[]>;
}) {
    return (
        <>
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section className={utilStyles.headingMd}>
                    <p>[Your Self Introduction]</p>
                    <p>
                        (This is a sample website - you’ll be building a site
                        like this in{" "}
                        <a href="https://nextjs.org/learn">
                            our Next.js tutorial
                        </a>
                        .)
                    </p>
                </section>
                <section
                    className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
                >
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>{title}</Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                        {allProjects.college.length > 0 &&
                            allProjects.college.map(({ title, type }, idx) => (
                                <li key={idx}>
                                    {title} - {type}
                                </li>
                            ))}
                        {allProjects.work.length > 0 &&
                            allProjects.work.map(({ title, type }, idx) => (
                                <li key={idx}>
                                    {title} - {type}
                                </li>
                            ))}
                    </ul>
                </section>
            </Layout>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPosts();
    const allProjects = getSortedProjects();
    return {
        props: {
            allPostsData,
            allProjects,
        },
    };
};

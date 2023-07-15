import Head from "next/head";
import utilStyles from "@/styles/utils.module.css";
import Layout, { siteTitle } from "@/components/layout";
import { getSortedPosts } from "@/lib/posts";
import { GetStaticProps } from "next";
import { PostData } from "@/types";

export default function Home({ allPostsData }: { allPostsData: PostData[] }) {
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
                                {title}
                                <br />
                                {id}
                                <br />
                                {date}
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
    return {
        props: {
            allPostsData,
        },
    };
};

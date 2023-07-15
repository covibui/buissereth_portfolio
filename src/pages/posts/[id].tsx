import Layout from "@/components/Layout";
import Date from "@/components/Date";
import { getAllPostIds, getPostData } from "@/lib/posts";
import { PostData } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import utilStyles from "@/styles/utils.module.css";

export default function Post({ postData }: { postData: PostData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: postData.content as string,
                    }}
                />
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postId = params?.id as string;
    const postData = await getPostData(postId);
    return {
        props: {
            postData,
        },
    };
};

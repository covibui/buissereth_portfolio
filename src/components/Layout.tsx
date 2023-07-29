import Head from "next/head";
import AppHeader from "./AppHeader";
import AppContainer from "./AppContainer";
import { siteTitle } from "@/lib/constants";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
    home?: boolean;
}) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="alternate icon" href="/favicon.ico" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#EA580C"
                />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                {/* TODO: Replace with actual og:image */}
                {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
                <meta name="og:title" content={siteTitle} />
                {/* TODO: Replace with actual twitter:card */}
                {/* <meta name="twitter:card" content="summary_large_image" /> */}
            </Head>
            <AppHeader />
            <AppContainer>{children}</AppContainer>
        </>
    );
}

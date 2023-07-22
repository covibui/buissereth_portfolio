import Head from "next/head";
import AppHeader from "./AppHeader";
import AppContainer from "./AppContainer";
import { siteTitle } from "@/lib/constants";
import { Toolbar } from "@mui/material";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
    home?: boolean;
}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
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
            <Toolbar />
            <AppContainer>{children}</AppContainer>
        </>
    );
}

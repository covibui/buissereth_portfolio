import Layout from "@/components/Layout";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";
import { Toolbar } from "@mui/material";
import Head from "next/head";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="og:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* TODO: get actual social image */}
        {/* <meta name="og:image" content={SOCIAL_IMAGE} />
                <meta name="og:image:alt" content={SITE_DESCRIPTION} />
                <meta name="twitter:image" content={SOCIAL_IMAGE} />
                <meta name="og:twitter:alt" content={SITE_DESCRIPTION} /> */}
      </Head>
      <Toolbar />
      <div>About</div>
    </Layout>
  );
}

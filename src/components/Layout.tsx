import Head from "next/head";
import AppHeader from "./AppHeader";
import AppContainer from "./AppContainer";
import { CONTACT_EMAIL, DOMAIN, SITE_TITLE } from "@/lib/constants";
import { useRouter } from "next/router";
import ContactSection from "./ContactSection";
import AppFooter from "./AppFooter";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const router = useRouter();
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#EA580C" />
        <link rel="cannonical" href={DOMAIN + router.route} />
        <meta name="og:site_name" content={SITE_TITLE} />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content={DOMAIN + router.route} />
      </Head>
      <AppHeader />
      <AppContainer>
        {children}
        <ContactSection />
      </AppContainer>
      <AppFooter />
    </>
  );
}

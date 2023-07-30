import Head from "next/head";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { ProjectFrontMatter, ProjectType } from "@/types";
import Link from "next/link";
import { getSortedProjects } from "@/lib/projects";
import {
    NAME,
    SITE_DESCRIPTION,
    SITE_TITLE,
    SOCIAL_IMAGE,
} from "@/lib/constants";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import theme from "@/theme";

interface Props {
    projects: Record<ProjectType, ProjectFrontMatter[]>;
}

export default function Home({ projects }: Props) {
    const breakpoints = theme.breakpoints.values;
    console.log(breakpoints);
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
                <Grid
                    container
                    spacing={2.25}
                    columns={10}
                    sx={{ mt: { xs: 4, md: 0 } }}
                >
                    <Grid xs={10} md={5} lg={4}>
                        <Box
                            sx={{
                                display: {
                                    md: "flex",
                                },
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                height: {
                                    md: 1,
                                },
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    mb: 2,
                                    fontSize: "2.25rem",
                                    fontWeight: 600,
                                }}
                            >
                                {NAME}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Id amet velit esse pariatur tempor minim
                                consectetur ea deserunt eu ad nulla.
                                Reprehenderit consequat sit anim elit cillum eu
                                deserunt.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Reprehenderit excepteur dolor commodo mollit ex
                                id tempor irure dolor laboris occaecat irure
                                pariatur excepteur.
                            </Typography>
                            <Button>Get in touch</Button>
                        </Box>
                    </Grid>
                    <Grid xs={10} md={5} lg={6}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                height: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    aspectRatio: 710 / 660,
                                    maxWidth: {
                                        xs: "75vw",
                                        lg: "auto",
                                    },
                                    mx: "auto",
                                    flexGrow: 1,
                                }}
                            >
                                <Image
                                    fill
                                    src="/images/portrait.png"
                                    sizes={`(max-width: ${breakpoints.md}): 50vw, 60vw`}
                                    alt={NAME}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
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

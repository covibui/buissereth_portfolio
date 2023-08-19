import Head from "next/head";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { ProjectGroup } from "@/types";
import RouterLink from "next/link";
import { getSortedProjects } from "@/lib/projects";
import {
  NAME,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SOCIAL_IMAGE,
} from "@/lib/constants";
import { Box, Button, Divider, Link, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import theme from "@/theme";
import palette from "@/theme/palette";
import AppContainer from "@/components/AppContainer";

interface Props {
  projectGroups?: ProjectGroup[];
}

export default function Home({ projectGroups }: Props) {
  const breakpoints = theme.breakpoints.values;
  return (
    <>
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
        <AppContainer>
          <Box
            component="section"
            id="hero"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "100vh",
            }}
          >
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
                    Id amet velit esse pariatur tempor minim consectetur ea
                    deserunt eu ad nulla. Reprehenderit consequat sit anim elit
                    cillum eu deserunt.
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    Reprehenderit excepteur dolor commodo mollit ex id tempor
                    irure dolor laboris occaecat irure pariatur excepteur.
                  </Typography>
                  <Button color="primary" href="#contact">
                    Get in touch
                  </Button>
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
            <Divider />
          </Box>
          <Box component="section" id="projects" sx={{ mt: 10 }}>
            <Box>
              <Typography variant="h2">Projects</Typography>
              <Typography sx={{ maxWidth: { md: 0.5 } }}>
                Duis qui ullamco eiusmod. Nulla duis consequat commodo enim non
                aliqua est et Lorem do. Ut laboris eiusmod sint culpa commodo
                voluptate. Non amet esse ad ut.
              </Typography>
            </Box>
            {projectGroups?.map((group, idx) => {
              if (group.projects.length) {
                return (
                  <Box
                    key={idx}
                    component="section"
                    id={`${group.slug}-projects`}
                    sx={{ mt: 7 }}
                  >
                    <Typography variant="h3" sx={{ mb: 6 }}>
                      {`${group.title} Projects`}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={5} sx={{}}>
                        {group.projects.map((project, idx) => (
                          <Grid
                            key={idx}
                            {...{
                              xs: 12,
                              sm: 6,
                              lg: 4,
                            }}
                            sx={{
                              aspectRatio: 3 / 2,
                            }}
                          >
                            <Link
                              component={RouterLink}
                              href={`/projects/${group.slug}/${project.slug}/`}
                              sx={{
                                display: "block",
                                width: 1,
                                height: 1,
                                "&:hover, &:focus-visible": {
                                  "& .title-overlay": {
                                    opacity: 0.7,
                                  },
                                },
                                "&:focus-visible": {
                                  outline: `2px solid ${palette.orange[500]}`,
                                  outlineOffset: 2,
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  height: 1,
                                  background: palette.blueGrey[100],
                                  position: "relative",
                                }}
                              >
                                <Image
                                  src={`/images/projects/${group.slug}/${project.slug}/${project.thumb}`}
                                  fill
                                  style={{
                                    objectFit: "cover",
                                  }}
                                  alt={`${project.title} - ${group.title} Project`}
                                />
                                <Box
                                  sx={{
                                    width: 1,
                                    height: 1,
                                    p: 3,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "absolute",
                                    backgroundColor: palette.blueGrey[700],
                                    opacity: 0,
                                    transition: "opacity .2s",
                                  }}
                                  className="title-overlay"
                                >
                                  <Typography
                                    component="strong"
                                    sx={{
                                      color: palette.white,
                                      fontSize: 24,
                                      fontWeight: 600,
                                      textAlign: "center",
                                    }}
                                  >
                                    {project.title}
                                  </Typography>
                                </Box>
                              </Box>
                            </Link>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Box>
                );
              }
            })}
          </Box>
        </AppContainer>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projectGroups = getSortedProjects();
  return {
    props: {
      projectGroups,
    },
  };
};

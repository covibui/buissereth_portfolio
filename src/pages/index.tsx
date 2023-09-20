import Head from "next/head";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { ProjectFrontMatter, ProjectGroup, ProjectType } from "@/types";
import RouterLink from "next/link";
import { getSortedProjects } from "@/lib/projects";
import {
  NAME,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SOCIAL_IMAGE,
} from "@/lib/constants";
import {
  Box,
  Button,
  Divider,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { theme } from "@/theme";
import palette from "@/theme/palette";
import AppContainer from "@/components/AppContainer";
import hexToRGBA from "@/utils/hexToRGBA";
import FAIcon from "@/components/FAIcon";

interface Props {
  projectGroups?: ProjectGroup[];
}

export default function Home({ projectGroups }: Props) {
  const breakpoints = theme.breakpoints.values;
  const isProjectsMultiColumn = useMediaQuery("(min-width: 687px)");

  const iconByProjectType: Record<ProjectType, string> = {
    "case-study": "file",
    code: "code",
    design: "pen-nib",
    ux: "lightbulb",
  };

  const ProjectCard = ({
    projectType,
    project,
  }: {
    projectType: string;
    project: ProjectFrontMatter;
  }) => (
    <Box
      sx={[
        isProjectsMultiColumn && {
          aspectRatio: 5 / 3,
        },
      ]}
    >
      <Link
        component={RouterLink}
        href={`/projects/${projectType}/${project.slug}/`}
        sx={{
          display: "block",
          width: 1,
          height: 1,
          borderRadius: 1,
          overflow: "hidden",
          "&:hover, &:focus-visible": {
            "& .project-overlay": {
              background: hexToRGBA(project.color, 0.6),
              "& .fa-arrow-right": {
                left: 4,
              },
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
          <Box
            sx={{
              width: 1,
              height: 1,
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: hexToRGBA(project.color, 0.5),
              transition: "background .2s",
            }}
            className="project-overlay"
          >
            <Box
              sx={[
                {
                  pt: 3,
                  px: 3,
                  display: "flex",
                  gap: 1,
                },
                isProjectsMultiColumn && {
                  pt: 4,
                  px: 5,
                  gap: 0.5,
                  flexDirection: "column",
                },
              ]}
            >
              <Box sx={[!isProjectsMultiColumn && { mt: 0.5 }]}>
                <FAIcon
                  icon={iconByProjectType[project.projectType]}
                  sx={{ color: palette.white, fontSize: { xl: 32 } }}
                />
              </Box>
              <Typography
                component="strong"
                sx={{
                  color: palette.white,
                  fontSize: 24,
                  lineHeight: "38px",
                }}
              >
                {project.title}
              </Typography>
            </Box>
            <Box
              sx={{
                pb: 2,
                px: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 1,
                color: palette.white,
              }}
            >
              <Typography sx={{ fontSize: 18 }}>Explore</Typography>
              <FAIcon
                sx={{ position: "relative", left: 0, transition: "left .2s" }}
                icon="arrow-right"
              />
            </Box>
          </Box>
          <Image
            src={`/images/projects/${projectType}/${project.slug}/${project.thumb}`}
            fill
            style={{
              objectFit: "cover",
              position: "absolute",
            }}
            alt={`${project.title} - ${projectType} project`}
          />
        </Box>
      </Link>
    </Box>
  );

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
            <Box
              sx={{
                display: { md: "grid" },
                gridTemplateColumns: "repeat(10, 1fr)",
                columnGap: 2.5,
              }}
            >
              <Box
                sx={{
                  gridColumn: { md: "span 5", lg: "span 4" },
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
              <Box
                sx={{
                  gridColumn: { md: "span 5", lg: "span 6" },
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
            </Box>
            <Divider />
          </Box>
          <Box component="section" id="projects">
            <Toolbar />
            <Box sx={{ mt: 10 }}>
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
                      <Box
                        sx={[
                          isProjectsMultiColumn && {
                            display: "grid",
                            gridTemplateColumns:
                              "repeat(auto-fill, minmax(300px, 1fr))",
                            gap: 5,
                          },
                        ]}
                      >
                        {group.projects.map((project, idx) => (
                          <ProjectCard
                            key={idx}
                            projectType={group.slug}
                            project={project}
                          />
                        ))}
                      </Box>
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

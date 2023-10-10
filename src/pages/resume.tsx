import fs from "fs";
import AppContainer from "@/components/AppContainer";
import Layout from "@/components/Layout";
import { NAME, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";
import {
  Box,
  BoxProps,
  Button,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { GetStaticProps } from "next";
import Head from "next/head";
import path from "path";
import { ResumeData } from "@/types";
import matter from "gray-matter";
import palette from "@/theme/palette";
import { ReactNode } from "react";

const root = path.join(process.cwd(), "src/data");

interface Props {
  pageData: ResumeData;
}

const TimelineItem = ({ children, sx, ...boxProps }: BoxProps) => (
  <Box
    {...boxProps}
    sx={{
      position: "relative",
      ml: 2,
      pl: 2,
      pb: 5,
      borderLeft: `2px solid ${palette.blueGrey[300]}`,
      "&:last-of-type": {
        pb: 0,
      },
      "&::before": {
        content: '""',
        display: "inline-block",
        position: "absolute",
        top: 0,
        left: -11,
        width: 20,
        height: 20,
        background: palette.white,
        border: `2px solid ${palette.blueGrey[300]}`,
        borderRadius: 4,
      },
      "& >:first-child": {
        position: "relative",
        top: -2,
      },
      ...sx,
    }}
  >
    {children}
  </Box>
);

export default function Resume({ pageData }: Props) {
  const { title } = pageData;
  const pdfLink = `/documents/${pageData.cta.button.file}`;

  return (
    <Layout>
      <Head>
        <title>{`${SITE_TITLE} - Resume`}</title>
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
      <AppContainer>
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mb: 5,
          }}
        >
          <Typography variant="h1" sx={{ mr: 5 }}>
            {pageData.title}
          </Typography>
          <Button color="secondary" href={pdfLink} download>
            Download PDF
          </Button>
        </Box>
        <Box component="section" id="resume-experience" sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 6 }}>
            Experience
          </Typography>
          {pageData.experience.map((experienceItem, idx) => (
            <TimelineItem key={idx}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { md: "auto 300px" },
                  columnGap: { md: 3 },
                  mb: "22px", // + 2px from positioning = 24px
                }}
              >
                <Typography variant="h4" sx={{ order: { md: 1 } }}>
                  {experienceItem.employer}
                </Typography>
                <Typography sx={{ order: { md: 3 }, fontWeight: 600 }}>
                  {experienceItem.position}
                </Typography>
                <Typography
                  sx={{ order: { md: 2 }, textAlign: { md: "right" } }}
                >
                  {experienceItem.location}
                </Typography>
                <Typography
                  sx={{ order: { md: 4 }, textAlign: { md: "right" } }}
                >
                  {experienceItem.date}
                </Typography>
              </Box>
              <Typography>{experienceItem.description}</Typography>
              <List>
                {experienceItem.responsibilities.map(
                  (responsibilityItem, idx) => (
                    <ListItem
                      key={idx}
                      sx={{
                        display: "list-item",
                        listStyleType: "disc",
                        ml: 3,
                        pl: 0,
                      }}
                    >
                      {responsibilityItem}
                    </ListItem>
                  )
                )}
              </List>
            </TimelineItem>
          ))}
        </Box>
        <Box component="section" id="resume-education" sx={{ mb: 5 }}>
          <Typography variant="h2" sx={{ mb: 6 }}>
            Education
          </Typography>
          {pageData.education.map((educationItem, idx) => (
            <TimelineItem key={idx}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { md: "auto 300px" },
                  columnGap: { md: 3 },
                }}
              >
                <Typography variant="h4" sx={{ order: { md: 1 } }}>
                  {educationItem.school}
                </Typography>
                <Box sx={{ order: { md: 3 } }}>
                  <Typography>{educationItem.degree}</Typography>
                  <Typography>{educationItem.supplemental}</Typography>
                </Box>
                <Typography
                  sx={{ order: { md: 2 }, textAlign: { md: "right" } }}
                >
                  {educationItem.location}
                </Typography>
                <Typography
                  sx={{ order: { md: 4 }, textAlign: { md: "right" } }}
                >
                  {educationItem.date}
                </Typography>
              </Box>
            </TimelineItem>
          ))}
        </Box>
        <Box component="section" id="resume-skills" sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 6 }}>
            Skills
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2.5,
            }}
          >
            {pageData.skills.map((skillItem, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: 128, sm: 192 },
                  background: palette.blueGrey[100],
                  borderRadius: 1,
                  p: 2,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/icons/${skillItem.image}`}
                  alt={skillItem.name}
                  style={{
                    width: 96,
                    marginBottom: 16,
                  }}
                />
                <Typography sx={{ fontWeight: 600, textAlign: "center" }}>
                  {skillItem.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          component="section"
          id="resume-cta"
          sx={{
            my: 6,
            px: {
              xs: 2.5,
              md: 6,
            },
            py: {
              xs: 6,
              md: 12,
            },
            background: palette.blueGrey[300],
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2.5,
              borderBottom: 4,
              borderColor: palette.blueGrey[800],
              pb: 2,
              color: palette.blueGrey[800],
            }}
          >
            {pageData.cta.title}
          </Typography>
          <Typography
            sx={{ mb: 6, color: palette.blueGrey[700], fontSize: "1.25rem" }}
          >
            {pageData.cta.summary}
          </Typography>
          <Button size="large" color="secondary" href={pdfLink}>
            {pageData.cta.button.text}
          </Button>
        </Box>
      </AppContainer>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const source = fs.readFileSync(path.join(root, "resume.md"), "utf8");

  // @ts-ignore
  const { data }: { data: ResumeData } = matter(source);

  return {
    props: {
      pageData: data,
    },
  };
};

import Grid from "@mui/material/Grid";
import { Theme } from "@mui/material/styles";
import { WithStyles } from '@mui/styles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import * as React from "react";
import { CareerCard } from "../components";
import { CareerItems } from "../types";

const styles = (theme: Theme) =>
  createStyles({
    chip: {
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    chipsContainer: {
      display: "flex",
      flexWrap: "wrap"
    },
    grid: {
      maxWidth: "100vw",
      minHeight: "100vh"
    },
    root: {
      padding: 16
    },
    toolbarSpacer: theme.mixins.toolbar
  });

interface Props extends WithStyles<typeof styles> {}

const careers: CareerItems[] = [
  {
    details: [
      "I worked at WACUL INC. I worked for AI Analyst that's the SaaS product of WACUL.",
      "First, I made report from Google Analytics with Microsoft Excel, Microsoft Power Point when I worked as part time job",
      "After while, I joined WACUL as employee and was engaged in logic development",
      "Next, I changed the job to UX design and Project management about AI Analyst. Think about features, screen layout and design, communications with bussiness and development team etc."
    ],
    headline: "August 2014 - February 2018",
    positions: ["Data Scientist", "UX designer", "Project Manager"],
    skills: [
      "Scala",
      "Python",
      "Javascript",
      "jQuery",
      "UI/UX",
      "Sketch",
      "Management"
    ],
    links: []
  },
  {
    details: [
      "I worked at M3 Career, Inc. I was involved in two project.",
      "One is the new native mobile application for doctors. The other is the renewal project of lagacy web system about job change for doctors",
      "In mobile app project, I used React Native and GraphQL. I mainly developed about front-end and implemented back-end server written by Kotlin and Java a little.",
      "In renewal project, I took over one of the biggest issue from colleague. I used Vue.js and Ruby on Rails when I modernized a functionality by refactoring.",
      "I also worked sub project. I developed react-native app, maricuruapp. If you want to know, please see links"
    ],
    headline: "March 2018 - February 2019",
    positions: ["Web Application Engineer"],
    skills: [
      "JavaScript",
      "Node.js",
      "React Native",
      "Kotlin",
      "Java",
      "GraphQL",
      "Vue.js",
      "Ruby on Rails"
    ],
    links: ["https://maricuru.com/pages/app/"]
  },
  {
    details: [
      "I work at CureApp, Inc. I'm developing degital therapeutics app by React Native, React and Node.js with AWS Lambda.",
      "I also work for side project for dentists SNS named 1D app with React Native. If you want to know more, please refer to the links",
      "I contribute to some OSS, but it's little. I organize the Nihonbashi.js and I'm the main staff of TypeScript JP. So I want to focus on more OSS and community activities."
    ],
    headline: "March 2019 - Present",
    positions: ["Engineer"],
    skills: [
      "Node.js",
      "React Native",
      "TypeScript",
      "React",
      "aws-cdk",
      "aws-amplify"
    ],
    links: ["https://news.oned.jp/app-release/", "https://typescript-jp.dev/"]
  },
  {
    details: [
      "I welcome attractive and exiciting job opportunities at anytime wherever.",
      "If you want to contact me, please contact from below services.",
      "I won't reply to contact with company name hidden.",
      "No matter how attractive the change is, I can't immediately quit my company. So, I welcome offers that look ahead for months to a year. I'd like to start with knowing each other."
    ],
    headline: "The future",
    positions: ["Engineer"],
    skills: ["Unknown"],
    links: []
  }
];

export default withStyles(styles)(function Career(props: Props) {
  const { classes } = props;
  return (
    <div id="career" className={classes.root}>
      <div className={classes.toolbarSpacer} />
      <Grid
        container={true}
        justifyContent="center"
        alignItems="center"
        className={classes.grid}
        spacing={4}
      >
        {careers.map((career, i) => (
          <Grid item={true} key={i} xs={12} md={8}>
            <CareerCard {...career} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
});

import Grid from '@material-ui/core/Grid';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import * as React from 'react';
import { CareerCard } from '../components';
import { CareerItems } from '../types';

const styles = (theme: Theme) =>
  createStyles({
    chip: {
      marginBottom: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    chipsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    grid: {
      maxWidth: '100vw',
      minHeight: '100vh',
    },
    root: {
      padding: 16,
    },
    toolbarSpacer: theme.mixins.toolbar,
  });

interface Props extends WithStyles<typeof styles> {}

const careers: CareerItems[] = [
  {
    details: [
      "I worked at WACUL INC. I worked for AI Analyst that's the SaaS product of WACUL.",
      'First, I made report from Google Analytics with Microsoft Excel, Microsoft Power Point when I worked as part time job',
      'After while, I joined WACUL as employee and was engaged in logic development',
      'Next, I changed the job to UX design and Project management about AI Analyst. Think about features, screen layout and design, communications with bussiness and development team etc.',
    ],
    headline: 'August 2014 - February 2018',
    positions: ['Data Scientist', 'UX designer', 'Project Manager'],
    skills: [
      'Scala',
      'Python',
      'Javascript',
      'jQuery',
      'UI/UX',
      'Sketch',
      'Management',
    ],
  },
  {
    details: [
      'I work at M3 Career, Inc. I develop Native Mobile Application for Doctors',
      "I'm mainly in charge of Front-End about development, using react-native. Occasionally, I develop Back-End that's written in Kotlin and Java.",
    ],
    headline: 'March 2018 - the present',
    positions: ['Web Application Engineer'],
    skills: ['React', 'React Native', 'Kotlin'],
  },
];

export default withStyles(styles)(function Career(props: Props) {
  const { classes } = props;
  return (
    <div id="career" className={classes.root}>
      <div className={classes.toolbarSpacer} />
      <Grid
        container={true}
        justify="center"
        alignItems="center"
        className={classes.grid}
        spacing={32}
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

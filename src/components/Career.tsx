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
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(2),
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
      'I worked at M3 Career, Inc. I was involved in two project.',
      'One is the new native mobile application for doctors. The other is the renewal project of lagacy web system about job change for doctors',
      'In mobile app project, I used React Native and GraphQL. I mainly developed about front-end and implemented back-end server written by Kotlin and Java a little.',
      'In renewal project, I took over one of the biggest issue from colleague. I used Vue.js and Ruby on Rails when I modernized a functionality by refactoring.',
    ],
    headline: 'March 2018 - February 2019',
    positions: ['Web Application Engineer'],
    skills: [
      'JavaScript',
      'Node.js',
      'React Native',
      'Kotlin',
      'Java',
      'GraphQL',
      'Vue.js',
      'Ruby on Rails',
    ],
  },
  {
    details: [
      'I work at CureApp, Inc. I develop new app like medicine by React Native.',
      'My hobby is to contribute to OSS like Node.js or React Native',
    ],
    headline: 'March 2019 - the present',
    positions: ['Engineer'],
    skills: ['Node.js', 'React Native', 'TypeScript'],
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

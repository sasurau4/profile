import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

const styles = (theme: Theme) =>
  createStyles({
    card: {},
    chip: {
      marginBottom: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    chipsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    grid: {
      flexGrow: 1,
      maxWidth: '100vw',
      minHeight: '100vh',
    },
    toolbarSpacer: theme.mixins.toolbar,
  });

interface Props extends WithStyles<typeof styles> {}

const firstSkills = [
  'Scala',
  'Python',
  'Javascript',
  'jQuery',
  'UI/UX',
  'Sketch',
  'Management',
];

// const secondSkills = ['React', 'React Native', 'Kotlin'];
export default withStyles(styles)(function Career(props: Props) {
  const { classes } = props;
  return (
    <>
      <div className={classes.toolbarSpacer} id="career" />
      <Grid
        container={true}
        justify="center"
        direction="column"
        alignItems="center"
        className={classes.grid}
        spacing={32}
      >
        <Grid item={true}>
          <Typography variant="display3" align="center" gutterBottom={true}>
            Career
          </Typography>
        </Grid>
        <Grid item={true}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="headline" gutterBottom={true}>
                August 2014 - February 2017
              </Typography>
              <Typography variant="subheading">Position</Typography>
              <Typography gutterBottom={true}>
                Data Scientist, UX designer, Project Manager
              </Typography>
              <Typography variant="subheading">Skills</Typography>
              <div className={classes.chipsContainer}>
                {firstSkills.map((item, i) => (
                  <Chip
                    label={item}
                    key={i}
                    color="primary"
                    variant="outlined"
                    className={classes.chip}
                  />
                ))}
              </div>
              <Typography variant="subheading" gutterBottom={true}>
                Details
              </Typography>
              <Typography gutterBottom={true}>
                I worked at WACUL INC.. First, I made report from Google
                Analytics with Microsoft Excel, Microsoft Power Point.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="headline" gutterBottom={true}>
                August 2014 - February 2017
              </Typography>
              <Typography variant="subheading">Position</Typography>
              <Typography gutterBottom={true}>
                Data Scientist, UX designer, Project Manager
              </Typography>
              <Typography variant="subheading">Skills</Typography>
              <div className={classes.chipsContainer}>
                {firstSkills.map((item, i) => (
                  <Chip
                    label={item}
                    key={i}
                    color="primary"
                    variant="outlined"
                    className={classes.chip}
                  />
                ))}
              </div>
              <Typography variant="subheading" gutterBottom={true}>
                Details
              </Typography>
              <Typography gutterBottom={true}>
                I worked at WACUL INC.. First, I made report from Google
                Analytics with Microsoft Excel, Microsoft Power Point.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
});

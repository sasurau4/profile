import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import AndroidLogo from '../images/android_logo.gif';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () =>
  createStyles({
    avatar: {
      height: 200,
      width: 200,
    },
    grid: {
      minHeight: '100vh',
    },
  });

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(function About(props: Props) {
  const { classes } = props;
  return (
    <Paper id="about">
      <Grid
        container={true}
        justify="center"
        direction="column"
        alignItems="center"
        className={classes.grid}
      >
        <Typography variant="display3" align="center">
          About
        </Typography>
        <Avatar
          alt="Daiki Ihara"
          src={AndroidLogo}
          className={classes.avatar}
        />
        <Grid item={true} xs={3}>
          <Typography
            variant="title"
            align="center"
            color="textSecondary"
            paragraph={true}
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
});

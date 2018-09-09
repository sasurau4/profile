import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import Androidfy from '../images/my-androidify.png';
import MyPicture from '../images/my-profile-picture.jpg';

const styles = (theme: Theme) =>
  createStyles({
    // Required Grid component Limitations
    // see https://material-ui.com/layout/grid/#negative-margin
    aboutContainer: {
      padding: 16,
    },
    avatar: {
      height: 200,
      width: 200,
    },
    grid: {
      flexGrow: 1,
      maxWidth: '100vw',
      minHeight: '100vh',
    },
    toolbarSpacer: theme.mixins.toolbar,
  });

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(function About(props: Props) {
  const { classes } = props;
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.toolbarSpacer} id="about" />
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
            About
          </Typography>
        </Grid>
        <Grid item={true}>
          <Grid
            container={true}
            justify="center"
            direction="row"
            alignItems="center"
            spacing={16}
          >
            <Grid item={true}>
              <Avatar
                alt="Daiki Ihara androidfy"
                src={Androidfy}
                className={classes.avatar}
              />
            </Grid>
            <Grid item={true}>
              <Avatar
                alt="Daiki Ihara picture"
                src={MyPicture}
                className={classes.avatar}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item={true} xs={8} sm={6}>
          <Typography
            variant="title"
            align="center"
            color="textSecondary"
            paragraph={true}
          >
            Daiki Ihara is Front-End Engineer. I love Web, Vim, Javascript,
            Typescript, React etc. Working in Tokyo, Japan. Like web services.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
});

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { Theme } from '@mui/material/styles';
import { WithStyles } from '@mui/styles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Androidfy from '../images/my-androidify.png';
import MyPicture from '../images/my-profile-picture.jpg';

const styles = (theme: Theme) =>
  createStyles({
    avatar: {
      height: 200,
      width: 200,
    },
    grid: {
      flexGrow: 1,
      maxWidth: '100vw',
      minHeight: '100vh',
    },
    // Required Grid component Limitations
    // see https://material-ui.com/layout/grid/#negative-margin
    root: {
      padding: 16,
    },
    toolbarSpacer: theme.mixins.toolbar,
  });

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(function About(props: Props) {
  const { classes } = props;
  return (
    <div id="about" className={classes.root}>
      <div className={classes.toolbarSpacer} />
      <Grid
        container={true}
        justifyContent="center"
        direction="column"
        alignItems="center"
        className={classes.grid}
        spacing={4}
      >
        <Grid item={true}>
          <Typography variant="h3" align="center" gutterBottom={true}>
            About
          </Typography>
        </Grid>
        <Grid item={true}>
          <Grid
            container={true}
            justifyContent="center"
            direction="row"
            alignItems="center"
            spacing={2}
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
            variant="body1"
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

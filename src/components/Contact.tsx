import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { GithubCircle, Linkedin, Twitter } from 'mdi-material-ui';
import * as React from 'react';

const styles = (theme: Theme) =>
  createStyles({
    avatar: {
      height: 80,
      width: 80,
    },
    grid: {
      maxWidth: '100vw',
      minHeight: '100vh',
    },
    icon: {
      fontSize: 40,
    },
    toolbarSpacer: theme.mixins.toolbar,
  });

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(function Contact(props: Props) {
  const { classes } = props;
  const icons = [
    <Twitter key="twitter-icon" className={classes.icon} />,
    <GithubCircle key="github" className={classes.icon} />,
    <Linkedin key="linkedin" className={classes.icon} />,
  ];
  return (
    <>
      <div className={classes.toolbarSpacer} id="contact" />
      <Grid
        container={true}
        justify="center"
        direction="column"
        alignItems="center"
        className={classes.grid}
        spacing={40}
      >
        <Grid item={true}>
          <Typography variant="display3" align="center">
            Contact
          </Typography>
        </Grid>
        <Grid
          container={true}
          justify="center"
          direction="row"
          alignItems="center"
          spacing={32}
        >
          {icons.map((icon, i) => (
            <Grid item={true} key={i}>
              <Avatar className={classes.avatar}>{icon}</Avatar>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
});

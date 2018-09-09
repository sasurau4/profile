import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { GithubCircle, Linkedin, Twitter } from 'mdi-material-ui';
import * as React from 'react';

const styles = (theme: Theme) =>
  createStyles({
    githubIcon: { color: '#333' },
    grid: {
      maxWidth: '100vw',
      minHeight: '100vh',
    },
    icon: {
      fontSize: 80,
    },
    iconButton: {
      height: 120,
      width: 120,
    },
    linkedinIcon: {
      color: '#0077B5',
    },
    root: {
      padding: 16,
    },
    toolbarSpacer: theme.mixins.toolbar,
    twitterIcon: {
      color: '#00aced',
    },
  });

interface Props extends WithStyles<typeof styles> {}
interface ContactItem {
  component: JSX.Element;
  to: string;
}

export default withStyles(styles)(function Contact(props: Props) {
  const { classes } = props;
  const contacts: ContactItem[] = [
    {
      component: (
        <Twitter
          key="twitter-icon"
          className={classNames(classes.icon, classes.twitterIcon)}
        />
      ),
      to: 'https://twitter.com/sasurau4',
    },
    {
      component: (
        <GithubCircle
          key="github"
          className={classNames(classes.icon, classes.githubIcon)}
        />
      ),
      to: 'https://github.com/sasurau4',
    },
    {
      component: (
        <Linkedin
          key="linkedin"
          className={classNames(classes.icon, classes.linkedinIcon)}
        />
      ),
      to: 'https://www.linkedin.com/in/daiki-ihara-8bb118106',
    },
  ];
  return (
    <div id="contact" className={classes.root}>
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
            Contact
          </Typography>
        </Grid>
        <Grid item={true}>
          <Grid
            container={true}
            justify="center"
            direction="row"
            alignItems="center"
            spacing={32}
          >
            {contacts.map((item, i) => (
              <Grid item={true} key={i}>
                <IconButton
                  className={classes.iconButton}
                  href={item.to}
                  target="_blank"
                >
                  {item.component}
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
});

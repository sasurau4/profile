import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { Theme } from '@mui/material/styles';
import { WithStyles } from '@mui/styles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import Typography from '@mui/material/Typography';
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
        justifyContent="center"
        direction="column"
        alignItems="center"
        className={classes.grid}
        spacing={4}
      >
        <Grid item={true}>
          <Typography variant="h3" align="center" gutterBottom={true}>
            Contact
          </Typography>
        </Grid>
        <Grid item={true}>
          <Grid
            container={true}
            justifyContent="center"
            direction="row"
            alignItems="center"
            spacing={4}
          >
            {contacts.map((item, i) => (
              <Grid item={true} key={i}>
                <IconButton
                  className={classes.iconButton}
                  href={item.to}
                  target="_blank"
                  size="large">
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

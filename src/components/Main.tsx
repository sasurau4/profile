import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { About, Contact, Home } from '../components';

const styles = () =>
  createStyles({
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
  });

interface Props extends WithStyles<typeof styles> {}

const Main = withStyles(styles)((props: Props) => (
  <main className={props.classes.content}>
    <Home />
    <About />
    <Contact />
  </main>
));

export default Main;

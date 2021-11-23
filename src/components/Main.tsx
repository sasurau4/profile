import { WithStyles } from '@mui/styles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import * as React from 'react';
import { About, Career, Contact, Home } from '../components';

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
    <Career />
    <Contact />
  </main>
));

export default Main;

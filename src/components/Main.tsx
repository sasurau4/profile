import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Home, Topics } from '../components';

const styles = (theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      padding: theme.spacing.unit * 3,
    },
  });

interface Props extends WithStyles<typeof styles> {}

const Main = withStyles(styles)((props: Props) => (
  <main className={props.classes.content}>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </Switch>
  </main>
));

export default Main;

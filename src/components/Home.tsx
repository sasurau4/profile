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
    appBarSpacer: theme.mixins.toolbar,
  });

interface Props extends WithStyles<typeof styles> {}

const Home = withStyles(styles)((props: Props) => (
  <>
    <div className={props.classes.appBarSpacer} />
    <Typography variant="display1" gutterBottom={true}>
      This is Home
    </Typography>
  </>
));

export default Home;

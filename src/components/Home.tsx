import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import Background from '../images/kirigamine-10_TP_V.jpg';

const styles = (theme: Theme) =>
  createStyles({
    appBarSpacer: theme.mixins.toolbar,
    backgroundContainer: {
      backgroundImage: `url(${Background})`,
    },
  });

interface Props extends WithStyles<typeof styles> {}

const Home = withStyles(styles)((props: Props) => (
  <>
    <div className={props.classes.appBarSpacer} />
    <div className={props.classes.backgroundContainer}>
      <Typography variant="display1" gutterBottom={true}>
        This is Home
      </Typography>
    </div>
  </>
));

export default Home;

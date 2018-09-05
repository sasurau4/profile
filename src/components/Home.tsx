import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
    backgroundContainer: {
      backgroundColor: theme.palette.common.black,
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: theme.palette.common.white,
      height: '100vh',
      justifyContent: 'center',
      textAlign: 'center',
    },
    backgroundFilter: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      height: '100vh',
    },
    grid: {
      minHeight: '100vh',
    },
  });

interface Props extends WithStyles<typeof styles> {}

const Home = withStyles(styles)((props: Props) => (
  <Paper id="home" className={props.classes.backgroundContainer}>
    <div className={props.classes.backgroundFilter}>
      <Grid
        container={true}
        justify="center"
        direction="column"
        alignItems="center"
        className={props.classes.grid}
      >
        <Typography
          variant="display3"
          align="center"
          color="inherit"
          gutterBottom={true}
        >
          Daiki Ihara
        </Typography>
        <Typography variant="headline" color="inherit" paragraph={true}>
          Personal biography
        </Typography>
      </Grid>
    </div>
  </Paper>
));

export default Home;

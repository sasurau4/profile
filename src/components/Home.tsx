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
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center',
      color: theme.palette.common.white,
      height: '100vh',
      justifyContent: 'center',
      textAlign: 'center',
    },
    backgroundFilter: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      height: '100vh',
    },
  });

interface Props extends WithStyles<typeof styles> {}

const Home = withStyles(styles)((props: Props) => (
  <Paper className={props.classes.backgroundContainer}>
    <div className={props.classes.backgroundFilter}>
      <Grid
        container={true}
        justify="center"
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Typography
          variant="display1"
          align="center"
          color="inherit"
          gutterBottom={true}
        >
          This is Home
        </Typography>
        <Typography variant="headline" color="inherit" paragraph={true}>
          This is Home
        </Typography>
      </Grid>
    </div>
  </Paper>
));

export default Home;

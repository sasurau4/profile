import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Theme } from '@mui/material/styles';
import { WithStyles } from '@mui/styles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import Typography from '@mui/material/Typography';
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
        justifyContent="center"
        direction="column"
        alignItems="center"
        className={props.classes.grid}
      >
        <Typography
          variant="h2"
          align="center"
          color="inherit"
          gutterBottom={true}
        >
          Daiki Ihara
        </Typography>
        <Typography variant="h3" color="inherit" paragraph={true}>
          Personal biography
        </Typography>
      </Grid>
    </div>
  </Paper>
));

export default Home;

import AppBar from '@mui/material/AppBar';
import { WithStyles } from '@mui/styles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import * as React from 'react';

const styles = () =>
  createStyles({
    a: {
      textDecorationLine: 'none',
    },
    toolbar: {
      justifyContent: 'space-evenly',
    },
  });

interface Props extends WithStyles<typeof styles> {}

const routes: string[] = ['home', 'about', 'career', 'contact'];

export default withStyles(styles)(function Header(props: Props) {
  const { classes } = props;
  return (
    <header>
      <nav>
        <AppBar position="absolute">
          <Toolbar className={classes.toolbar} variant="dense">
            {routes.map(item => (
              <Typography
                color="inherit"
                noWrap={true}
                key={item}
                className={classes.a}
                component={p => <a href={`#${item}`} {...p} />}
              >
                {item.toUpperCase()}
              </Typography>
            ))}
          </Toolbar>
        </AppBar>
      </nav>
    </header>
  );
});

import AppBar from '@material-ui/core/AppBar';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
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

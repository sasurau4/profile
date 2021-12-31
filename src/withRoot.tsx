import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme, } from '@mui/material/styles';
import { red, teal } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: red,
  },
});

function withRoot(Component: React.ComponentType) {
  function WithRoot(props: object) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...props} />
        </ThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;

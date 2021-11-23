import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, } from '@mui/styles';
import { createTheme, Theme, adaptV4Theme , StyledEngineProvider} from '@mui/material/styles';
import * as React from 'react';

import { red, teal } from '@mui/material/colors';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


// A theme with custom primary and secondary color.
// It's optional.
const theme = createTheme(adaptV4Theme({
  palette: {
    primary: teal,
    secondary: red,
  },
}));

function withRoot(Component: React.ComponentType) {
  function WithRoot(props: object) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...props} />
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }

  return WithRoot;
}

export default withRoot;

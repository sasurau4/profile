import * as React from 'react';

import { Header, Main } from './components';
import withRoot from './withRoot';

const App: React.StatelessComponent<{}> = () => (
  <>
    <Header />
    <Main />
  </>
);

export default withRoot(App);

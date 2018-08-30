import * as React from 'react';
import styled from 'styled-components';
import { Header, Main } from './components';
import withRoot from './withRoot';

const App: React.StatelessComponent<{}> = () => (
  <RootContainer>
    <Header />
    <Main />
  </RootContainer>
);

export default withRoot(App);

const RootContainer = styled.div`
  display: flex;
`;

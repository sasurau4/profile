import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Home, Topics } from '../components';

const Main = () => (
  <main>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </Switch>
  </main>
);

export default Main;

import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  RouteComponentProps,
} from 'react-router-dom';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <BasicExample />
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = (props: RouteComponentProps<any>) => (
  <div>
    <h3>{props.match.params.topicId}</h3>
  </div>
);

const Topics = (props: RouteComponentProps<any>) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${props.match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${props.match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${props.match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${props.match.path}/:topicId`} component={Topic} />
    <Route
      exact={true}
      path={props.match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default App;

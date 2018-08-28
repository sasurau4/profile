import * as React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import Topic from './Topic';

const Topics = (props: RouteComponentProps<{}>) => (
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

export default Topics;

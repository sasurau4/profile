import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IParams {
  topicId: string;
}

const Topic: React.SFC<RouteComponentProps<IParams>> = (
  props: RouteComponentProps<IParams>
) => (
  <div>
    <h3>{props.match.params.topicId}</h3>
  </div>
);

export default Topic;

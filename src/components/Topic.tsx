import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IParams {
  topicId: string;
}

export default (props: RouteComponentProps<IParams>) => (
  <div>
    <h3>{props.match.params.topicId}</h3>
  </div>
);

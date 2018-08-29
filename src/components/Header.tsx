import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

interface State {
  path: string;
}

class Header extends React.Component<RouteComponentProps<{}>, State> {
  public state = {
    path: '/',
  };

  public handleChange = ({}, value: string) => {
    const path: string = value;
    this.props.history.push(path);
    this.setState({ path });
  };

  public render() {
    const { path } = this.state;
    return (
      <header>
        <AppBar>
          <nav>
            <Tabs value={path} onChange={this.handleChange}>
              <Tab label="Home" value="/" />
              <Tab label="About" value="/about" />
              <Tab label="Topics" value="/topics" />
            </Tabs>
          </nav>
        </AppBar>
      </header>
    );
  }
}

export default withRouter(Header);

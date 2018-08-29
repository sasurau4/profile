import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.StatelessComponent = () => (
  <header>
    <AppBar>
      <nav>
        <Tabs value={false}>
          <Link to="/">
            <Tab label="Home" />
          </Link>
          <Link to="about">
            <Tab label="Home" />
          </Link>
          <Link to="/topics">
            <Tab label="Topics" />
          </Link>
        </Tabs>
      </nav>
    </AppBar>
  </header>
);

export default Header;

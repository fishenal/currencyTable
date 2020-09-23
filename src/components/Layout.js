import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  Route,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
import Currencies from '../pages/Currencies';
import Setting from '../pages/Setting';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Layout() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const path = location.pathname;

  const handleChange = (_, newValue) => {
    history.push(newValue)
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={path}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab label="Currencies" value="/currencies"/>
        <Tab label="Setting" value="/setting"/>
      </Tabs>
      <Switch>
        <Route path="/currencies">
          <Box p={3}>
            <Currencies />
          </Box>
        </Route>
        <Route path="/setting">
          <Box p={3}>
            <Setting />
          </Box>
        </Route>
      </Switch>
    </div>
  );
}

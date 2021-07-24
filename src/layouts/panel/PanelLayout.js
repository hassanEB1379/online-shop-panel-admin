import { Grid } from '@material-ui/core';
import { useState } from 'react';
import Navbar from 'components/navbar/Navbar';
import { Switch, Redirect } from 'react-router-dom';
import Sidebar from 'components/sidebar/Sidebar';
import { useRoutes, useRouteName } from 'hooks/RoutesHooks';
import PageTitle from 'components/pageTitle/PageTitle';

// styles
import useStyles from './styles';

const PanelLayout = ({ location }) => {
  const routes = useRoutes();

  const routeName = useRouteName(location.pathname);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const classes = useStyles({ sidebarOpen });

  return (
    <Grid container wrap="nowrap" className={classes.container}>
      <Navbar
        className={classes.navbarShift}
        switchSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <Sidebar open={sidebarOpen} />

      <Grid item className={classes.contentWrapper}>
        <PageTitle title={routeName} />

        <Switch>
          {routes}

          {/* Redirects */}
          <Redirect from="/panel" to="/panel/dashboard" />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default PanelLayout;

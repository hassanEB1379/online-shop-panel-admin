import { Grid } from '@material-ui/core';
import { useState } from 'react';
import Navbar from 'app/components/block/navbar/Navbar';
import { Switch, Redirect } from 'react-router-dom';
import Sidebar from 'app/components/block/sidebar/Sidebar';
import { useRoutes, useRouteName } from 'app/hooks/RoutesHooks';
import PageTitle from 'app/components/micro/pageTitle/PageTitle';
import Footer from 'app/components/block/Footer';

// styles
import useStyles from './styles';

const PanelLayout = ({ location }) => {
  const routes = useRoutes();

  const routeName = useRouteName(location.pathname);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const classes = useStyles({ sidebarOpen });

  return (
    <Grid container wrap="nowrap" className={classes.container}>
      {/* navbar */}
      <Navbar
        className={classes.navbarShift}
        switchSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* sidebar */}
      <Sidebar open={sidebarOpen} />

      <Grid item className={classes.contentWrapper}>
        <PageTitle title={routeName} />

        {/* dynamic content */}
        <Switch>
          {routes}

          {/* Redirects */}
          <Redirect from="/panel" to="/panel/dashboard" />
        </Switch>

        {/* footer */}
        <Footer />
      </Grid>
    </Grid>
  );
};

export default PanelLayout;

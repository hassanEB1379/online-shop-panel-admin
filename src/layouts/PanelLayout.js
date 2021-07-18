import { Grid, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Navbar from 'components/navbar/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Media from 'pages/media/Media';
import Sidebar from 'components/sidebar/Sidebar';
import AddProduct from 'pages/addProduct/AddProduct';
import ProductList from 'pages/ProductList/ProductList';

export const DRAWER_WIDTH = 255;
export const NAV_HEIGHT = 80;
export const MOBILE_NAV_HEIGHT = 60;

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',
    overflow: 'hidden',
  },
  contentWrapper: {
    width: '100%',
    overflow: 'auto',
    padding: theme.spacing(3, 2),
    marginTop: NAV_HEIGHT,
    [theme.breakpoints.up('md')]: {
      marginRight: props => (props.sidebarOpen ? DRAWER_WIDTH : 0),
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  navbarShift: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('md')]: {
      width: props =>
        props.sidebarOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%',
    },
  },
}));

const PanelLayout = () => {
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
        <Switch>
          <Route path="/panel/media" component={Media} />
          <Route path="/panel/product/add-product" component={AddProduct} />
          <Route path="/panel/product/product-list" component={ProductList} />

          {/* Redirects */}
          <Redirect from="/panel" to="/panel/dashboard" />
          <Redirect from="/panel/product" to="/panel/product/add-product" />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default PanelLayout;

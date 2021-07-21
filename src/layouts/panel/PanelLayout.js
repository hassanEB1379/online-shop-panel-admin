import { Grid } from '@material-ui/core';
import { useState } from 'react';
import Navbar from 'components/navbar/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Media from 'pages/media/Media';
import Sidebar from 'components/sidebar/Sidebar';
import AddProduct from 'pages/addProduct/AddProduct';
import ProductList from 'pages/ProductList/ProductList';
import Settings from 'pages/settings/Settings';

// styles
import useStyles from './styles';

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
          <Route path="/panel/settings" component={Settings} />
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

import {
  AppBar,
  IconButton,
  Toolbar,
  Grid,
  Divider,
  Hidden,
} from '@material-ui/core';
import { useState } from 'react';
import classNames from 'classnames';
import Search from './components/search/Search';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { SearchOutlined } from '@material-ui/icons';

// styles
import useStyles from './styles';

const Navbar = ({ className, switchSidebar }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  const classes = useStyles({ mobileNavOpen });

  const appbarClasses = classNames(classes.appbar, className);

  const Tools = (
    <Grid container alignItems="center">
      <Hidden xsDown>
        <Search />
      </Hidden>

      <Hidden smUp>
        <IconButton>
          <SearchOutlined color="primary" />
        </IconButton>
      </Hidden>

      <Divider orientation="vertical" flexItem />

      <IconButton>
        <NotificationsNoneIcon color="primary" />
      </IconButton>

      <Divider orientation="vertical" flexItem />

      <IconButton>
        <LanguageIcon color="primary" />
      </IconButton>
    </Grid>
  );

  return (
    <>
      <AppBar className={appbarClasses}>
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            alignItems="center"
            justify="space-between"
            wrap="nowrap"
          >
            <Grid item>
              <IconButton onClick={switchSidebar}>
                <MenuIcon color="primary" />
              </IconButton>
            </Grid>

            <Grid item>
              <Hidden xsDown>{Tools}</Hidden>

              <Hidden smUp>
                <IconButton onClick={handleMobileNav}>
                  <MoreHorizIcon />
                </IconButton>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>

        <Hidden smUp>
          <div className={classes.navMenu}>{Tools}</div>
        </Hidden>
      </AppBar>
    </>
  );
};

export default Navbar;

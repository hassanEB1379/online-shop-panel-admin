import {
  AppBar,
  IconButton,
  Toolbar,
  Grid,
  Divider,
  Avatar,
  Hidden,
} from '@material-ui/core';
import { useState } from 'react';
import classNames from 'classnames';
import Search from 'components/search/Search';

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

      <Divider orientation="vertical" flexItem />

      <Avatar />
    </Grid>
  );

  return (
    <>
      <AppBar className={appbarClasses}>
        <Toolbar>
          <Grid
            container
            alignItems="center"
            justify="space-between"
            wrap="nowrap"
          >
            <Grid item>
              <IconButton onClick={switchSidebar}>
                <MenuIcon />
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
      </AppBar>

      <Hidden smUp>
        <div className={classes.collaps}>{Tools}</div>
      </Hidden>
    </>
  );
};

export default Navbar;

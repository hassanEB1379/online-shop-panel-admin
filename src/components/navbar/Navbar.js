import {
  AppBar,
  IconButton,
  Toolbar,
  makeStyles,
  Grid,
  Divider,
  Avatar,
} from '@material-ui/core';
import classNames from 'classnames';
import Search from 'components/search/Search';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';

// styles
const useStyles = makeStyles(theme => ({
  appbar: {
    height: 80,
    boxShadow: theme.shadows[1],
    justifyContent: 'center',
  },
}));

const Navbar = ({ className, switchSidebar }) => {
  const classes = useStyles();

  const appbarClasses = classNames(classes.appbar, className);

  return (
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
            <Grid container alignItems="center">
              <Search />

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
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

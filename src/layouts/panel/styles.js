import { makeStyles } from '@material-ui/core';
import { NAV_HEIGHT, DRAWER_WIDTH } from 'utils/constants/Constants';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
  },
  contentWrapper: {
    width: '100%',
    overflow: 'auto',
    padding: theme.spacing(3, 2),
    marginTop: NAV_HEIGHT,
    [theme.breakpoints.up('md')]: {
      marginRight: props =>
        theme.direction === 'rtl' && props.sidebarOpen ? DRAWER_WIDTH : 0,

      marginLeft: props =>
        theme.direction === 'ltr' && props.sidebarOpen ? DRAWER_WIDTH : 0,
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

export default useStyles;

import { makeStyles } from '@material-ui/core';
import { NAV_HEIGHT, MOBILE_NAV_HEIGHT } from 'utils/constants/Constants';

const useStyles = makeStyles(theme => ({
  appbar: {
    height: NAV_HEIGHT,
    [theme.breakpoints.down('xs')]: {
      height: MOBILE_NAV_HEIGHT,
    },
    boxShadow: theme.shadows[1],
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    zIndex: theme.zIndex.appBar,
    backgroundColor: theme.palette.background.paper,
  },
  navMenu: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    right: 0,
    top: MOBILE_NAV_HEIGHT,
    backgroundColor: theme.palette.background.paper,
    padding: '5px 20px',
    zIndex: theme.zIndex.speedDial,
    boxShadow: theme.shadows[1],
    transition: 'transform .2s ease-out',
    transform: props =>
      props.mobileNavOpen
        ? 'translate3d(0 , 0 , 0)'
        : `translate3d(0 , -${MOBILE_NAV_HEIGHT}px , 0)`,
  },
}));

export default useStyles;

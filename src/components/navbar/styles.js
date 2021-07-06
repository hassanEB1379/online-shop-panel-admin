import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appbar: {
    height: 80,
    [theme.breakpoints.down('xs')]: {
      height: 60,
    },
    boxShadow: theme.shadows[1],
    justifyContent: 'center',
  },
  toolbar: {
    zIndex: theme.zIndex.appBar,
    backgroundColor: '#fff',
  },
  navMenu: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    right: 0,
    top: 60,
    backgroundColor: '#fff',
    padding: '5px 20px',
    zIndex: theme.zIndex.speedDial,
    boxShadow: theme.shadows[1],
    transition: 'transform .2s ease-out',
    transform: props =>
      props.mobileNavOpen
        ? 'translate3d(0 , 0 , 0)'
        : 'translate3d(0 , -60px , 0)',
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appbar: {
    height: 80,
    boxShadow: theme.shadows[1],
    justifyContent: 'center',
  },
  collaps: {
    position: 'absolute',
    width: '100%',
    right: 0,
    top: 70,
    backgroundColor: '#fff',
    padding: 20,
    zIndex: 900,
    transition: 'transform .2s ease-out',
    transform: props =>
      props.mobileNavOpen
        ? 'translate3d(0 , -80px , 0)'
        : 'translate3d(0 , 0 , 0)',
  },
}));

export default useStyles;

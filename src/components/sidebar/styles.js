import { makeStyles } from '@material-ui/core';
import { DRAWER_WIDTH } from 'utils/constants/Constants';

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  paper: {
    width: DRAWER_WIDTH,
    zIndex: theme.zIndex.speedDial,
    backgroundColor: theme.palette.background.sidebar,
  },
  profileImg: {
    height: '80px',
    width: '80px',
    margin: '0px auto',
    boxShadow: theme.shadows[5],
  },
  text: {
    color: theme.palette.text.sidebar,
  },
}));

export default useStyles;

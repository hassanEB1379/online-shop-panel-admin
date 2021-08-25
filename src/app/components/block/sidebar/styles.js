import { makeStyles } from '@material-ui/core';
import { DRAWER_WIDTH } from 'app/utils/constants/Constants';

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
}));

export default useStyles;

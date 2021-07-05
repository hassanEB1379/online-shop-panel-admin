import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  profileImg: {
    height: '80px',
    width: '80px',
    margin: '0px auto',
    boxShadow: theme.shadows[5],
  },
}));

export default useStyles;

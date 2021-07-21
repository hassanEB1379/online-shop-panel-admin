import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  searchBase: {
    backgroundColor: theme.palette.action.hover,
    borderRadius: '4rem',
    padding: theme.spacing(1, 2),
  },
  searchInput: {
    marginLeft: theme.spacing(5),
  },
  searchIcon: {
    position: 'absolute',
    left: 0,
    zIndex: 2000,
    opacity: 0.4,
    padding: theme.spacing(1),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;

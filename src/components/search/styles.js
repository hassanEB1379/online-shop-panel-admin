import { makeStyles } from '@material-ui/core';

// palette
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  searchBase: {
    backgroundColor: grey[100],
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
  },
}));

export default useStyles;

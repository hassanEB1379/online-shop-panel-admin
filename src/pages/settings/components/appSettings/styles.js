import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  light: {
    backgroundColor: '#fff',
  },
  dark: {
    backgroundColor: '#434343',
  },
  hidden: {
    display: 'none',
  },
}));

export default useStyles;

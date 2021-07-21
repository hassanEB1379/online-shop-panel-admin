import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    boxShadow: theme.shadows[10],
    margin: '0 auto',
    marginTop: '-5rem',
  },
}));

export default useStyles;

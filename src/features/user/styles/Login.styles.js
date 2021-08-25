import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    width: 500,
    [theme.breakpoints.down('xs')]: {
      width: 300,
    },
  },
  title: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: theme.spacing(1, 0),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
  },
  social: {
    marginTop: '1rem',
  },
  socialBtn: {
    border: '1px solid',
  },
  margin: {
    marginLeft: theme.spacing(1),
  },
}));

export default useStyles;

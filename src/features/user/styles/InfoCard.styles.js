import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('md')]: {
      padding: `0 ${theme.spacing(2)}px`,
    },
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    boxShadow: theme.shadows[10],
    margin: '0 auto',
    marginTop: '-5rem',
    cursor: 'pointer',
  },
  info: {
    '& > span': {
      fontWeight: theme.typography.fontWeightBold,
    },
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

export default useStyles;

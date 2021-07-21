import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  radio: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    position: 'relative',
    boxShadow: theme.shadows[6],
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&::after': {
      content: ' url("/static/images/checked.svg")',
      backgroundColor: theme.palette.success.main,
      borderRadius: '50%',
      height: 16,
      width: 16,
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      visibility: props => (props.checked ? 'visible' : 'hidden'),
    },
  },
  light: {
    backgroundColor: '#fff',
  },
  dark: {
    backgroundColor: '#434343',
    marginLeft: theme.spacing(1),
  },
  hidden: {
    display: 'none',
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  mainItem: {
    color: theme.palette.text.sidebar,
    transition: theme.transitions.create('margin-left', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      marginLeft: 3,
      color: theme.palette.text.hover,
    },
  },
  subItem: {
    color: theme.palette.text.sidebar,
    '&:hover': {
      color: theme.palette.text.hover,
    },
  },
  text: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize,
  },
  dot: {
    flexDirection: 'row-reverse',
    marginRight: '.8rem',
    '& > svg': {
      fontSize: '.6rem',
    },
  },
}));

export default useStyles;

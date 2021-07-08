import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  mainItem: {
    transition: theme.transitions.create('margin-left', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      marginLeft: 3,
      color: theme.palette.primary.main,
    },
  },
  subItem: {
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.primary.main,
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

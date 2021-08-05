import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  replacedRadio: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(1),
    position: 'relative',
    boxShadow: theme.shadows[6],
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&::after': {
      content: ' url("/static/images/checked.svg")',
      backgroundColor: theme.palette.success.dark,
      borderRadius: '50%',
      height: 16,
      width: 16,
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      visibility: 'hidden',
    },
  },

  flag: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundImage: props => `url(${props.flag})`,
    background: 'center / cover',
  },

  palette: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: props =>
      props.palette &&
      `linear-gradient(90deg, ${props.palette['A400']} 50%, ${props.palette['A200']} 50%);`,
  },

  radio: {
    position: 'absolute',
    opacity: 0,
    inset: 0,
    '&:checked + span::after': {
      visibility: 'visible',
    },
  },
}));

const StyledRadio = props => {
  const { className, icon, flag, palette, ...rest } = props;

  const classes = useStyles({ flag, palette });

  return (
    <label>
      <input className={classes.radio} type="radio" {...rest} />
      <span className={classNames(className, classes.replacedRadio)}>
        {icon && icon}

        {flag && <div className={classes.flag} />}

        {palette && <div className={classes.palette} />}
      </span>
    </label>
  );
};

export default StyledRadio;

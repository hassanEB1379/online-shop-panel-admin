import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  radio: {
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
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      visibility: props => (props.checked ? 'visible' : 'hidden'),
    },
  },
  flag: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundImage: props => `url(${props.flag})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  hidden: {
    display: 'none',
  },
}));

const StyledRatio = ({ value, name, className, icon, checked, flag }) => {
  const classes = useStyles({ checked, flag });

  return (
    <>
      <label>
        <span className={classNames(className, classes.radio)}>
          {icon ? icon : <div className={classes.flag} />}
        </span>
        <input
          className={classes.hidden}
          type="radio"
          name={name}
          value={value}
        />
      </label>
    </>
  );
};

export default StyledRatio;

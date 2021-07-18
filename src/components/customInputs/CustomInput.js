import { fade, InputBase, makeStyles, Typography } from '@material-ui/core';

// styles
const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: theme.spacing(3),
  },
  label: {
    display: 'block',
    margin: theme.spacing(0, 0, 1, 1),
  },
  input: {
    borderRadius: 7,
    padding: theme.spacing(2, 3),
    border: props =>
      !props.error
        ? `1px solid ${fade(theme.palette.text.disabled, 0.2)}`
        : `1px solid ${theme.palette.secondary.main}`,
    '&:focus': {
      border: props =>
        !props.error ? `1px solid ${theme.palette.primary.light}` : null,
    },
  },
}));

const CustomInput = props => {
  const { id, label, error, ...rest } = props;

  const classes = useStyles({ error: Boolean(error) });

  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={id}>
        <Typography>{label}</Typography>
      </label>

      <InputBase
        classes={{
          input: classes.input,
          root: classes.inputContainer,
        }}
        fullWidth
        id={id}
        {...rest}
      />
    </div>
  );
};

export default CustomInput;

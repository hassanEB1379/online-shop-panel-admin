import { makeStyles, Typography, Select } from '@material-ui/core';

// styles
const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: theme.spacing(3),
  },
  label: {
    display: 'block',
    margin: theme.spacing(0, 0, 1, 1),
  },
}));

const CustomSelect = props => {
  const { id, label, options, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={id}>
        <Typography>{label}</Typography>
      </label>

      <Select native id={id} {...rest}>
        {/* render options */}
        {options.map(group => {
          const { groupName, options } = group;

          return (
            <optgroup key={groupName} label={groupName}>
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </optgroup>
          );
        })}
      </Select>
    </div>
  );
};

export default CustomSelect;

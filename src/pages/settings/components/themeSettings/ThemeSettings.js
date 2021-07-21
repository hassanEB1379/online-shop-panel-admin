import { Box, Typography } from '@material-ui/core';
import { Brightness2, WbSunny } from '@material-ui/icons';
import classNames from 'classnames';
import { useThemeName } from 'contexts/ThemeContext';
import { useSetThemeName } from 'contexts/ThemeContext';

// styles
import useStyles from './styles';

const ThemeRatio = ({ value, name, className, icon, checked }) => {
  const classes = useStyles({ checked });

  return (
    <>
      <label>
        <span className={classNames(className, classes.radio)}>{icon}</span>
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

const ThemeSettings = () => {
  const classes = useStyles();

  const setThemeName = useSetThemeName();
  const themeName = useThemeName();

  const switchTheme = e => setThemeName(e.target.value);

  return (
    <Box p="2rem 0">
      <Typography variant="h6">تغییر تم</Typography>

      <Box pt="1rem" display="flex" onChange={switchTheme}>
        <ThemeRatio
          checked={themeName === 'light'}
          value="light"
          name="theme"
          className={classes.light}
          icon={<WbSunny htmlColor="#ffca0a" />}
        />
        <ThemeRatio
          checked={themeName === 'dark'}
          value="dark"
          name="theme"
          className={classes.dark}
          icon={<Brightness2 htmlColor="#fff" />}
        />
      </Box>
    </Box>
  );
};

export default ThemeSettings;

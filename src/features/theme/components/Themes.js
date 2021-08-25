import { Grid, Typography } from '@material-ui/core';
import {
  useThemeInfo,
  useThemeInfoDispatch,
} from 'features/theme/state/ThemeContext';
import { changeTheme } from 'features/theme/state/ThemeReducer';
import StyledRadio from './StyledRadio';
import { useTranslation } from 'react-i18next';

// styles
import useStyles from '../../../app/pages/settings/components/appSettings/styles';

// palettes
import { blue, purple, red } from '@material-ui/core/colors';

// icons
import { Brightness2, WbSunny } from '@material-ui/icons';

const Themes = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  const { themeName } = useThemeInfo();
  const dispatch = useThemeInfoDispatch();

  const switchTheme = e => dispatch(changeTheme(e.target.value));

  return (
    <Grid container spacing={3}>
      <Grid item>
        <Typography>{t('setting.changeTheme')}</Typography>
      </Grid>

      <Grid item container onChange={switchTheme}>
        <StyledRadio
          defaultChecked={themeName === 'light'}
          value="light"
          name="theme"
          className={classes.light}
          icon={<WbSunny htmlColor="#ffca0a" />}
        />

        <StyledRadio
          defaultChecked={themeName === 'dark'}
          value="dark"
          name="theme"
          className={classes.dark}
          icon={<Brightness2 htmlColor="#fff" />}
        />

        <StyledRadio
          defaultChecked={themeName === 'blue'}
          value="blue"
          name="theme"
          palette={blue}
        />

        <StyledRadio
          defaultChecked={themeName === 'red'}
          value="red"
          name="theme"
          palette={red}
        />

        <StyledRadio
          defaultChecked={themeName === 'purple'}
          value="purple"
          name="theme"
          palette={purple}
        />
      </Grid>
    </Grid>
  );
};

export default Themes;

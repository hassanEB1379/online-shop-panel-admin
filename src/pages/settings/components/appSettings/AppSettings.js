import { Box, Grid, Typography } from '@material-ui/core';
import { Brightness2, WbSunny } from '@material-ui/icons';
import { useThemeInfoDispatch, useThemeInfo } from 'contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { changeDir, changeTheme } from 'reducers/ThemeReducer';
import StyledRadio from './components/StyledRadio';

// styles
import useStyles from './styles';

// palettes
import { blue, purple, red } from '@material-ui/core/colors';

const AppSettings = () => {
  const classes = useStyles();

  const { t, i18n } = useTranslation();

  const dispatch = useThemeInfoDispatch();
  const { themeName } = useThemeInfo();

  const switchLang = e => {
    const lang = e.target.value;
    const langDir = i18n.dir(lang);

    i18n.changeLanguage(lang);
    dispatch(changeDir(langDir));
  };

  const switchTheme = e => dispatch(changeTheme(e.target.value));

  return (
    <Box p="2rem 0">
      <Grid container direction="column" spacing={2}>
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

        <Grid item>
          <Typography>{t('setting.changeLang')}</Typography>
        </Grid>

        <Grid item container onChange={switchLang}>
          <StyledRadio
            defaultChecked={i18n.language === 'fa'}
            value="fa"
            name="lang"
            flag="/static/images/iran.png"
          />
          <StyledRadio
            defaultChecked={i18n.language === 'en'}
            value="en"
            name="lang"
            flag="/static/images/united-kingdom.png"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppSettings;

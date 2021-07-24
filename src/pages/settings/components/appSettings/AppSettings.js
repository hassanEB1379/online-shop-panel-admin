import { Box, Typography } from '@material-ui/core';
import { Brightness2, WbSunny } from '@material-ui/icons';
import { useThemeInfoDispatch, useThemeInfo } from 'contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { changeDir, changeTheme } from 'reducers/ThemeReducer';
import StyledRatio from './components/StyledRatio';

// styles
import useStyles from './styles';

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
      <Typography variant="h6">{t('setting.changeTheme')}</Typography>

      <Box pt="1rem" display="flex" onChange={switchTheme}>
        <StyledRatio
          checked={themeName === 'light'}
          value="light"
          name="theme"
          className={classes.light}
          icon={<WbSunny htmlColor="#ffca0a" />}
        />
        <StyledRatio
          checked={themeName === 'dark'}
          value="dark"
          name="theme"
          className={classes.dark}
          icon={<Brightness2 htmlColor="#fff" />}
        />
      </Box>

      <Box mt="1rem">
        <Typography variant="h6">{t('setting.changeLang')}</Typography>
      </Box>

      <Box pt="1rem" display="flex" onChange={switchLang}>
        <StyledRatio value="fa" name="lang" flag="/static/images/iran.png" />
        <StyledRatio
          value="en"
          name="lang"
          flag="/static/images/united-kingdom.png"
        />
      </Box>
    </Box>
  );
};

export default AppSettings;

import { Grid, Typography } from '@material-ui/core';
import { useThemeInfoDispatch } from 'features/theme/state/ThemeContext';
import { useTranslation } from 'react-i18next';
import { changeDir } from 'features/theme/state/ThemeReducer';
import StyledRadio from './StyledRadio';

const Langs = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useThemeInfoDispatch();

  const switchLang = e => {
    const lang = e.target.value;
    const langDir = i18n.dir(lang);

    i18n.changeLanguage(lang);
    dispatch(changeDir(langDir));
  };

  return (
    <Grid container spacing={3}>
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
  );
};

export default Langs;

import { Grid, Paper, Tabs, Tab } from '@material-ui/core';
import { useState } from 'react';
import InfoCard from './components/infoCard/InfoCard';
import AppSettings from './components/appSettings/AppSettings';
import { useTranslation } from 'react-i18next';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && children}
    </div>
  );
};

const Settings = () => {
  const { t } = useTranslation();

  const [openTab, setOpenTab] = useState(0);

  const handleChange = (_, newTab) => {
    setOpenTab(newTab);
  };

  return (
    <Grid container spacing={4} style={{ marginTop: '6rem' }}>
      <Grid item xs={12} md={4}>
        <InfoCard />
      </Grid>

      <Grid item xs={12} md={8}>
        <Paper>
          <Tabs value={openTab} onChange={handleChange}>
            <Tab label={t('setting.public')} />
          </Tabs>

          <TabPanel value={openTab} index={0}>
            <AppSettings />
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Settings;

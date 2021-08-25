import { Grid, Paper, Tabs, Tab } from '@material-ui/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InfoCard from '../../../features/user/components/InfoCard';

// tabs components
import AppSettings from './components/appSettings/AppSettings';
import UpdateInfoForm from '../../../features/user/components/UpdateInfoForm';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tab-panel" hidden={value !== index} {...other}>
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
            <Tab label={t('setting.editInfo')} />
          </Tabs>

          <TabPanel value={openTab} index={0}>
            <AppSettings />
          </TabPanel>

          <TabPanel value={openTab} index={1}>
            <UpdateInfoForm />
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Settings;

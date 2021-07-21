import { Grid, Paper, Tabs, Tab } from '@material-ui/core';
import PageTitle from 'components/pageTitle/PageTitle';
import { useState } from 'react';
import InfoCard from './components/infoCard/InfoCard';
import ThemeSettings from './components/themeSettings/ThemeSettings';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && children}
    </div>
  );
};

const Settings = () => {
  const [openTab, setOpenTab] = useState(0);

  const handleChange = (_, newTab) => {
    setOpenTab(newTab);
  };

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <PageTitle title="تنظیمات" subTitle="مدیریت پنل" />
      </Grid>

      <Grid item container style={{ marginTop: '3rem' }}>
        <Grid item xs={4}>
          <InfoCard />
        </Grid>

        <Grid item xs={8}>
          <Paper>
            <Tabs value={openTab} onChange={handleChange}>
              <Tab label="تنظیمات تم" />
            </Tabs>

            <TabPanel value={openTab} index={0}>
              <ThemeSettings />
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Settings;

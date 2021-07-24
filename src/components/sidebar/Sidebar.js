import {
  Avatar,
  Divider,
  Drawer,
  List,
  Typography,
  Grid,
  Box,
} from '@material-ui/core';
import SidebarLink from './components/sidebarLink/SidebarLink';
import { useTranslation } from 'react-i18next';

// menu items
import panelRoutes from 'routes';

// styles
import useStyles from './styles';

const Sidebar = ({ open }) => {
  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      classes={{ paper: classes.paper }}
    >
      <div className={classes.drawerHeader}></div>
      <Divider />
      {/* list-profile */}
      <Box padding="15px">
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Avatar className={classes.profileImg} />
          </Grid>

          <Grid item>
            <Typography variant="h5" align="center">
              اسم ادمین
            </Typography>
          </Grid>

          <Grid item>
            <Typography align="center">{t('welcome')}</Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      <List component="nav">
        {panelRoutes.map((item, index) => (
          <SidebarLink key={index} item={item} />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

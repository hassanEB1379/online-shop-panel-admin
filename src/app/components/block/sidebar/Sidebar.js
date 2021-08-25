import { Divider, Drawer, List } from '@material-ui/core';
import SidebarLink from './components/sidebarLink/SidebarLink';
import Welcome from '../../../../features/user/components/Welcome';

// menu items
import panelRoutes from 'app/routes';

// styles
import useStyles from './styles';

const Sidebar = ({ open }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      classes={{ paper: classes.paper }}
    >
      <div className={classes.drawerHeader}></div>

      <Welcome />

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

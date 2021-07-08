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

// icons
import { CloudUpload, Shop } from '@material-ui/icons';

// styles
import useStyles from './styles';

// menu items
const items = [
  {
    name: 'رسانه',
    path: '/panel/media',
    icon: CloudUpload,
  },
  {
    name: 'محصولات',
    icon: Shop,
    children: [
      {
        name: 'افزودن محصول',
        path: '/panel/product/add-product',
      },
    ],
  },
];

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
            <Typography align="center"> خوش آمدید</Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      <List component="nav">
        {items.map((item, index) => (
          <SidebarLink key={index} item={item} />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

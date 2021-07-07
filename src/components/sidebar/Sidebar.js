import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
  Typography,
  Grid,
  Box,
} from '@material-ui/core';

// icons
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

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

      <List>
        {['رسانه'].map((text, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

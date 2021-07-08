import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  List,
} from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// icons
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// styles
import useStyles from './styles';

const SidebarLink = ({ item }) => {
  const classes = useStyles();

  const { path, name, children, icon: Icon } = item;

  const [open, setOpen] = useState(false);

  return (
    <>
      <Link to={path}>
        <ListItem className={classes.mainItem} onClick={() => setOpen(!open)}>
          <ListItemIcon>
            <Icon fontSize="small" />
          </ListItemIcon>

          <ListItemText
            primaryTypographyProps={{
              classes: { body1: classes.text },
            }}
            primary={name}
          />

          {children && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
      </Link>

      {/* dropdown menu */}
      {children && (
        <Collapse in={open}>
          <List>
            {children.map((childItem, index) => (
              <Link key={index} to={childItem.path}>
                <ListItem className={classes.subItem}>
                  <ListItemIcon className={classes.dot}>
                    <FiberManualRecordIcon />
                  </ListItemIcon>

                  <ListItemText
                    primaryTypographyProps={{
                      classes: { body1: classes.text },
                    }}
                    primary={childItem.name}
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default SidebarLink;

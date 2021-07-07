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

const NavItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Link to={item.path}>
        <ListItem button onClick={() => setOpen(!open)}>
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>

          <ListItemText primary={item.name} />

          {item.children && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
      </Link>

      {/* dropdown menu */}
      {item.children && (
        <Collapse in={open}>
          <List style={{ backgroundColor: '#f9f9f9' }}>
            {item.children.map((childItem, index) => (
              <Link key={index} to={childItem.path}>
                <ListItem button style={{ paddingRight: '1.5rem' }}>
                  <ListItemIcon>
                    <childItem.icon />
                  </ListItemIcon>

                  <ListItemText primary={childItem.name} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default NavItem;

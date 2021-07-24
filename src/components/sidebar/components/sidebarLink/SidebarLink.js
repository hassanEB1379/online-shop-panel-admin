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
import { useTranslation } from 'react-i18next';

const SidebarLink = ({ item }) => {
  const classes = useStyles();

  const { t } = useTranslation();

  const { path, name, children, icon: Icon } = item;

  const [open, setOpen] = useState(false);

  const ParentLink = (
    <ListItem className={classes.mainItem} onClick={() => setOpen(!open)}>
      <ListItemIcon>
        <Icon fontSize="small" />
      </ListItemIcon>

      <ListItemText
        primaryTypographyProps={{
          classes: { body1: classes.text },
        }}
        primary={t(name)}
      />

      {children && (open ? <ExpandLess /> : <ExpandMore />)}
    </ListItem>
  );

  return (
    <>
      {path ? <Link to={path}>{ParentLink}</Link> : ParentLink}

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
                    primary={t(childItem.name)}
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

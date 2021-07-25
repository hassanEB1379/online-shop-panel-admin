import {
  Paper,
  Box,
  Avatar,
  List,
  ListItem,
  Typography,
  Divider,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

// styles
import useStyles from './styles';

const InfoCard = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <Box className={classes.container}>
      <Paper>
        <Avatar className={classes.avatar} />
        <Box marginTop="1.5rem">
          <List>
            <ListItem>
              <Typography>{t('info.userName')}</Typography>
            </ListItem>

            <Divider />

            <ListItem>
              <Typography>{t('info.email')}</Typography>
            </ListItem>

            <Divider />

            <ListItem>
              <Typography>{t('info.phone')}</Typography>
            </ListItem>

            <Divider />

            <ListItem>
              <Typography>{t('info.role')}</Typography>
            </ListItem>

            <Divider />

            <ListItem>
              <Typography>{t('info.password')}</Typography>
            </ListItem>
          </List>
        </Box>
      </Paper>
    </Box>
  );
};

export default InfoCard;

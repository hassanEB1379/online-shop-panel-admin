import { useUser, useUserDispatch } from '../state/UserContext';
import { uploadUserImg } from '../state/UserReducer';

import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

// material components
import {
  Paper,
  Box,
  Avatar,
  List,
  ListItem,
  Typography,
  Divider,
} from '@material-ui/core';

// styles
import useStyles from '../styles/InfoCard.styles';

const InfoCard = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  const { info } = useUser();

  const dispatch = useUserDispatch();

  const inputRef = useRef();

  const handleOpenFileExplorer = () => {
    inputRef.current.click();
  };

  const handleUploadProfileImg = e => {
    const { files } = e.target;

    dispatch(uploadUserImg(URL.createObjectURL(files[0])));
  };

  return (
    <Box className={classes.container}>
      <Paper>
        <div>
          <Avatar
            src={info.image}
            onClick={handleOpenFileExplorer}
            className={classes.avatar}
          />
          <input
            onChange={handleUploadProfileImg}
            ref={inputRef}
            title=""
            type="file"
            hidden
          />
        </div>

        <Box marginTop="1.5rem">
          <List>
            <ListItem>
              <Typography className={classes.info}>
                {t('info.userName')} :{' '}
                <Typography component="span">{info.userName}</Typography>
              </Typography>
            </ListItem>

            <Divider />

            <ListItem>
              <Typography className={classes.info}>
                {t('info.email')} :{' '}
                <Typography component="span">
                  {info.email.length ? info.email : t('info.empty')}
                </Typography>
              </Typography>
            </ListItem>

            <Divider />

            <ListItem>
              <Typography className={classes.info}>
                {t('info.phone')} :{' '}
                <Typography component="span">
                  {info.phone.length ? info.phone : t('info.empty')}
                </Typography>
              </Typography>
            </ListItem>

            <Divider />

            <ListItem>
              <Typography className={classes.info}>
                {t('info.role')} :{' '}
                <Typography component="span">{info.role}</Typography>
              </Typography>
            </ListItem>

            <Divider />

            <ListItem>
              <Typography className={classes.info}>
                {t('info.password')} :{' '}
                <Typography component="span">{info.password}</Typography>
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Paper>
    </Box>
  );
};

export default InfoCard;

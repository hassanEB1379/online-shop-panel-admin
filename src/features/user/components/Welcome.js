import { useUser } from '../state/UserContext';
import { Avatar, Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  profileImg: {
    height: '80px',
    width: '80px',
    margin: '0px auto',
    boxShadow: theme.shadows[5],
  },
  text: {
    color: theme.palette.text.sidebar,
  },
}));

const Welcome = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  const { info } = useUser();

  return (
    <Box padding="15px">
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Avatar className={classes.profileImg} src={info.image} />
        </Grid>

        <Grid item>
          <Typography className={classes.text} variant="h5" align="center">
            {info.userName}
          </Typography>
        </Grid>

        <Grid item>
          <Typography className={classes.text} align="center">
            {t('welcome')}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;

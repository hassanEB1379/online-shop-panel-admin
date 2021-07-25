import {
  Grid,
  Paper,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Box,
} from '@material-ui/core';

//icons
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Google from 'icons/Google';
import { useTranslation } from 'react-i18next';

//style
import useStyles from './styles';

const Login = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <Paper elevation={2} className={classes.paper}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <span className={classes.title}>
            <PermIdentityIcon fontSize="large" />
            <Typography variant="h4">{t('login.header')}</Typography>
          </span>
        </Grid>

        <Grid item>
          <form>
            <Box mb="1.5rem">
              <TextField
                fullWidth
                variant="outlined"
                label={t('info.userName')}
              />
            </Box>

            <Box mb="1.5rem">
              <TextField
                fullWidth
                type="password"
                variant="outlined"
                label={t('info.password')}
              />
            </Box>

            <Box mb="1.5rem">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox color="primary" name="rememberMe" />}
                  label={t('login.remember')}
                />
              </FormGroup>
            </Box>

            <Button variant="contained" color="primary">
              {t('login.loginBtn')}
            </Button>

            <Button
              className={classes.margin}
              endIcon={<Google />}
              variant="contained"
              color="primary"
            >
              {t('login.google')}
            </Button>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Login;

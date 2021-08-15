import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { LoginSchema as validationSchema } from 'utils/validations/schema';
import { useUserDispatch } from 'contexts/UserContext';
import { loginSuccess } from 'reducers/UserReducer';
import { useHistory } from 'react-router-dom';

// material components
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
import Google from 'components/icons/Google';

//style
import useStyles from './styles';

const Login = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  const dispatch = useUserDispatch();

  const history = useHistory();

  // handle login form
  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(loginSuccess(values));
      return history.push('/panel');
    },
  });

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
          <form onSubmit={handleSubmit}>
            <Box mb="1.5rem">
              <TextField
                fullWidth
                variant="outlined"
                label={t('info.userName')}
                error={Boolean(touched.userName && errors.userName)}
                helperText={touched.userName && errors.userName}
                {...getFieldProps('userName')}
              />
            </Box>

            <Box mb="1.5rem">
              <TextField
                fullWidth
                type="password"
                variant="outlined"
                label={t('info.password')}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                {...getFieldProps('password')}
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

            <Button type="submit" variant="contained" color="primary">
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

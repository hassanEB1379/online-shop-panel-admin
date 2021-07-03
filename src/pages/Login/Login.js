import { Divider } from '@material-ui/core';
import {
  Grid,
  Paper,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  IconButton,
} from '@material-ui/core';

//icons
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Google from 'icons/Google';

//style
import useStyles from './styles';

const Login = () => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <span className={classes.title}>
            <PermIdentityIcon fontSize="large" />
            <Typography variant="h4">ورود</Typography>
          </span>
        </Grid>

        <Grid item>
          <form>
            <div className="form-group">
              <TextField fullWidth variant="outlined" label="نام کاربری" />
            </div>

            <div className="form-group">
              <TextField
                fullWidth
                type="password"
                variant="outlined"
                label="رمز عبور"
              />
            </div>

            <div className="form-group">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="rememberMe" />}
                  label="مرا به خاطر بسپار"
                />
              </FormGroup>
            </div>

            <div>
              <Button variant="contained" color="primary">
                ورود به پنل
              </Button>

              <Button
                style={{ marginRight: '.5rem' }}
                endIcon={<Google />}
                variant="contained"
                color="primary"
              >
                ورود با اکانت گوگل
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Login;

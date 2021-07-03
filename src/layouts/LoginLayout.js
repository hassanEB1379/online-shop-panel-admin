import { Grid } from '@material-ui/core';
import Login from 'pages/Login/Login';

const LoginLayout = () => {
  return (
    <Grid
      style={{ minHeight: '100vh' }}
      container
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <Login />
      </Grid>
    </Grid>
  );
};

export default LoginLayout;

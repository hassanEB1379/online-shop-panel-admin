import { Box, Grid } from '@material-ui/core';
import Login from 'pages/Login/Login';

const LoginLayout = () => {
  return (
    <Box bgcolor="background.default" minHeight="100vh" clone>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <Login />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginLayout;

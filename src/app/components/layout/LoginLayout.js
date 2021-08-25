import { Box, Grid } from '@material-ui/core';
import Login from 'features/user/components/Login';

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

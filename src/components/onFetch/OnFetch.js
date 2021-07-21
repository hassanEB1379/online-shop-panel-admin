import {
  Box,
  Grid,
  Typography,
  IconButton,
  CircularProgress,
} from '@material-ui/core';
import { RepeatRounded } from '@material-ui/icons';

const OnFetch = ({ variant, reFetch, ...rest }) => {
  const handleRefetch = () => reFetch();

  return (
    <Box bgcolor="background.paper" height="300px" clone {...rest}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          {variant === 'error' && (
            <IconButton color="primary" onClick={handleRefetch}>
              <RepeatRounded />
            </IconButton>
          )}

          {variant === 'loading' && <CircularProgress />}
        </Grid>

        <Grid item>
          <Typography>
            {variant === 'error' ? 'خطا در برقراری ارتباط' : 'در حال بارگذاری'}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OnFetch;

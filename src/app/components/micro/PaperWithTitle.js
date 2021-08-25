import { Grid, Paper, Typography } from '@material-ui/core';

const PaperWithTitle = ({ title, children, ...rest }) => {
  return (
    <Paper {...rest}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </Paper>
  );
};

export default PaperWithTitle;

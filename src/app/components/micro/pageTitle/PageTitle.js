const { Typography, makeStyles, Box } = require('@material-ui/core');

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
  },
}));

const PageTitle = ({ title, subTitle }) => {
  const classes = useStyles();
  return (
    <Box mb="1.5rem">
      <Typography className={classes.root} variant="h3">
        {title}
      </Typography>
      <Typography className={classes.root} variant="caption">
        {subTitle}
      </Typography>
    </Box>
  );
};

export default PageTitle;

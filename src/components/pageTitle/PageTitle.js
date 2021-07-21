const { Typography, makeStyles } = require('@material-ui/core');

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
  },
}));

const PageTitle = ({ title, subTitle }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.root} variant="h3">
        {title}
      </Typography>
      <Typography className={classes.root} variant="caption">
        {subTitle}
      </Typography>
    </div>
  );
};

export default PageTitle;

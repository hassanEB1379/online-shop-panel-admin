import { Box, Grid, Icon, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  text: {
    color: theme.palette.common.white,
  },
  icon: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const IconBox = ({ bgColor = 'primary.main', icon, header, text }) => {
  const classes = useStyles({ bgColor });

  return (
    <Box boxShadow={2} borderRadius="1rem" bgcolor={bgColor} p="1rem">
      <Grid container spacing={4} alignItems="center">
        <Grid item>
          <Icon
            style={{ color: bgColor }}
            className={classes.icon}
            component="div"
          >
            {icon}
          </Icon>
        </Grid>

        <Grid item className={classes.text}>
          <Typography variant="h6">{header}</Typography>
          <Typography>{text}</Typography>
          <Typography>در این ماه</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IconBox;

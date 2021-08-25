import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(6),
    margin: theme.spacing(-3, -2),
    height: theme.spacing(7),
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    boxShadow: theme.shadows[1],
  },
  text: {
    color: theme.palette.text.secondary,
  },
  link: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const Footer = () => {
  const cs = useStyles();

  return (
    <div className={cs.root}>
      <Typography className={cs.text}>
        made bay{' '}
        <a
          className={cs.link}
          href="https://github.com/hassanEB1379"
          target="_blank"
          rel="noreferrer"
        >
          hassan
        </a>
      </Typography>
    </div>
  );
};

export default Footer;

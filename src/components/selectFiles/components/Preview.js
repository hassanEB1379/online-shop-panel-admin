import { makeStyles, IconButton, fade } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  preview: {
    width: '100%',
    maxWidth: 275,
    height: 200,
    backgroundColor: theme.palette.action.selected,
    boxShadow: theme.shadows[4],
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  removeBtn: {
    position: 'absolute',
    margin: theme.spacing(1),
    color: fade(theme.palette.common.white, 0.5),
    '&:hover': {
      color: theme.palette.common.white,
    },
    transition: theme.transitions.create(['color', 'background-color'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

const Preview = ({ src, alt, handleRemove }) => {
  const classes = useStyles();
  return (
    <div className={classes.preview}>
      {src && (
        <>
          <IconButton
            onClick={handleRemove}
            type="button"
            className={classes.removeBtn}
          >
            <Close />
          </IconButton>
          <img className={classes.image} alt={`preview-${alt}`} src={src} />
        </>
      )}
    </div>
  );
};

export default Preview;

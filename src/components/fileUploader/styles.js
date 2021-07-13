import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  uploadField: {
    padding: theme.spacing(1),
    position: 'relative',
    height: 250,
    border: '2px dashed',
    borderColor: theme.palette.primary.main,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  fileInput: {
    width: ' 100%',
    opacity: 0,
    position: 'absolute',
    top: 0,
    bottom: 0,
    cursor: 'pointer',
    zIndex: 998,
  },
  tileContainer: {
    position: 'relative',
    zIndex: theme.zIndex.mobileStepper,
  },
  tile: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: ' 100%',
  },
  removeBtn: {
    position: 'absolute',
    top: 0,
    color: '#fff',
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  gridListContainer: {
    overflowY: 'auto',
    flexGrow: 1,
  },
  gridList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4 , 1fr)',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(2 , 1fr)',
    },
    gridTemplateRows: 'repeat(auto-fill , 150px)',
    height: '100%',
    gap: 10,
  },
  gridListItem: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    cursor: 'pointer',
  },
}));

export default useStyles;

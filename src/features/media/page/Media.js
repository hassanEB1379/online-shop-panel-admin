import { Grid } from '@material-ui/core';
import AddNewFiles from '../components/AddNewFiles';
import FileList from '../components/FileList';

const Media = () => {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item xs={12}>
        <AddNewFiles />
      </Grid>

      <Grid item xs={12}>
        <FileList />
      </Grid>
    </Grid>
  );
};

export default Media;

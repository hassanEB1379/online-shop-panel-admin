import { Grid } from '@material-ui/core';
import PageTitle from 'components/pageTitle/PageTitle';
import AddNewFiles from './components/AddNewFiles';
import FileList from './components/FileList';

const Media = () => {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <PageTitle title="رسانه" subTitle="مدیریت فایل ها" />
      </Grid>

      <Grid item>
        <AddNewFiles />
      </Grid>

      <Grid item>
        <FileList />
      </Grid>
    </Grid>
  );
};

export default Media;

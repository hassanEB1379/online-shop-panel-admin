import { Grid } from '@material-ui/core';
import PageTitle from 'components/pageTitle/PageTitle';
import AddNewFiles from './components/AddNewFiles';
import FileList from './components/FileList';

const Media = () => {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item xs={12}>
        <PageTitle title="رسانه" subTitle="مدیریت فایل ها" />
      </Grid>

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

import { Button, Grid, Paper, Typography, makeStyles } from '@material-ui/core';
import { useUploadFile } from 'hooks/MediaHooks';
import FileUploader from 'components/fileUploader/FileUploader';
import { useState } from 'react';
import OnFetch from 'components/onFetch/OnFetch';
import { useTranslation } from 'react-i18next';

// styles
const useStyles = makeStyles(theme => ({
  loading: {
    position: 'absolute',
    inset: 0,
    opacity: '.9',
    zIndex: theme.zIndex.tooltip,
  },
  loadingContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
}));

const AddNewFiles = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  const [file, setFile] = useState();

  const handleFileUploaderChange = newFiles => setFile(newFiles);

  const { mutate: upload, isLoading, isError } = useUploadFile();

  const handleUpload = () => upload(file);

  return (
    <Paper>
      <Grid container direction="column" spacing={5}>
        <Grid item container>
          <Typography variant="h4"> {t('media.upload')}</Typography>
        </Grid>

        <Grid item className={classes.loadingContainer}>
          {isLoading && (
            <OnFetch variant="loading" className={classes.loading} />
          )}

          <FileUploader maxSize="6000000" onUpload={handleFileUploaderChange} />
        </Grid>

        <Grid item>
          <Button
            onClick={handleUpload}
            disabled={!file || isLoading}
            color="primary"
            variant="contained"
          >
            {isError || isLoading ? t('fetch.reload') : t('media.upload')}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddNewFiles;

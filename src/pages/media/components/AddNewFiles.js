import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { useUploadFile } from 'hooks/MediaHooks';
import FileUploader from 'components/fileUploader/FileUploader';
import { useState } from 'react';

const BTN_TEXT = 'آپلود فایل جدید';

const AddNewFiles = () => {
  const [file, setFile] = useState();

  const handleFileUploaderChange = newFiles => setFile(newFiles);

  const { mutate: upload } = useUploadFile();

  const handleUpload = () => upload(file);

  return (
    <Paper>
      <Grid container direction="column" spacing={5}>
        <Grid item container>
          <Typography variant="h4"> آپلود فایل جدید</Typography>
        </Grid>

        <Grid item>
          <FileUploader maxSize="6000000" onUpload={handleFileUploaderChange} />
        </Grid>

        <Grid item>
          <Button
            onClick={handleUpload}
            disabled={!file}
            color="primary"
            variant="contained"
          >
            {BTN_TEXT}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddNewFiles;

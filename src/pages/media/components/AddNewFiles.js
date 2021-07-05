import { Button, Grid, Paper, Typography } from '@material-ui/core';
import FileUploader from 'components/fileUploader/FileUploader';
import { useState } from 'react';

const AddNewFiles = () => {
  const [files, setFiles] = useState([]);

  const handleFileUploaderChange = newFiles => setFiles(newFiles);

  const handleUpload = () => console.log(files);

  return (
    <Paper>
      <Grid container direction="column" spacing={5}>
        <Grid item>
          <Typography variant="h4"> آپلود فایل جدید</Typography>
        </Grid>

        <Grid item>
          <FileUploader
            multiple
            maxSize="6000000"
            onUpload={handleFileUploaderChange}
          />
        </Grid>

        <Grid item>
          <Button
            onClick={handleUpload}
            disabled={!files.length}
            color="primary"
            variant="contained"
          >
            آپلود فایل های جدید
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddNewFiles;

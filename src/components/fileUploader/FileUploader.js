import {
  Box,
  GridList,
  GridListTile,
  IconButton,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';

// icons
import { Close } from '@material-ui/icons';

// styles
import useStyles from './styles';

const FileUploader = ({ onUpload, maxSize, ...rest }) => {
  const classes = useStyles();

  const [files, setFiles] = useState({});

  const addNewFiles = newFiles => {
    for (const file of newFiles) {
      if (file.size <= maxSize) {
        if (!rest.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const convertNestedObjectToArray = nestedObj =>
    Object.keys(nestedObj).map(key => nestedObj[key]);

  const callUpdateFilesCb = files => {
    const filesAsArray = convertNestedObjectToArray(files);
    // pass files state to parent
    onUpload(filesAsArray);
  };

  const handleUpload = e => {
    const { files: newFiles } = e.target;

    if (newFiles.length) {
      setFiles(addNewFiles(newFiles));

      callUpdateFilesCb(addNewFiles(newFiles));
    }
  };

  const removeFile = fileName => {
    delete files[fileName];

    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };

  const ImageList = (
    <GridList cols={6} spacing={12}>
      {Object.values(files).map(file => (
        <GridListTile className={classes.tileContainer} key={file.name}>
          <div
            className={classes.tile}
            style={{
              backgroundImage: `url(${URL.createObjectURL(file)})`,
            }}
          >
            <IconButton
              onClick={() => removeFile(file.name)}
              className={classes.removeBtn}
            >
              <Close />
            </IconButton>
          </div>
        </GridListTile>
      ))}
    </GridList>
  );

  return (
    <Box className={classes.uploadField}>
      {Object.keys(files).length ? (
        ImageList
      ) : (
        <Typography>برای آپلود فایل های جدید بکشید یا کلیک کنید</Typography>
      )}

      <input
        className={classes.fileInput}
        title=""
        value=""
        onChange={handleUpload}
        type="file"
        {...rest}
      />
    </Box>
  );
};

export default FileUploader;

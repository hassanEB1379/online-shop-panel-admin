import {
  Button,
  Modal,
  Container,
  Paper,
  Grid,
  Typography,
  Box,
} from '@material-ui/core';
import { useAllMedia } from 'features/media/MediaHooks';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Preview from './components/Preview';

// styles
import useStyles from './styles';

const SelectFiles = ({ onSelect }) => {
  const classes = useStyles();

  const { t } = useTranslation();

  const { data: files } = useAllMedia();

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // handle modal
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleSelectChange = e => {
    // seleted file id
    const { id } = e.target.dataset;

    const getSelectedFileById = files.filter(file => file.id === id);

    setFile(...getSelectedFileById);
  };

  // when 'انتخاب' button clicked
  const handleSelect = () => {
    setPreview(file.thumbnail);

    // pass url of selected file to parent
    onSelect(file.url);

    // close modal
    handleModalClose();
  };

  const removeSelectedFile = () => {
    setPreview(null);

    setFile(null);

    // remove url selected file from parent
    onSelect('');
  };

  return (
    <Box marginTop="1rem">
      <Grid container direction="column-reverse" spacing={2}>
        <Grid item>
          <Button onClick={handleModalOpen} color="primary" variant="contained">
            {t('addImgBtn')}
          </Button>
        </Grid>

        <Grid item>
          <Preview
            src={preview}
            alt={file ? file.name : null}
            handleRemove={removeSelectedFile}
          />
        </Grid>
      </Grid>

      {/* image list modal */}
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Container maxWidth="md">
          <Box margin="4rem 0" height="80vh" clone>
            <Paper>
              <Grid
                style={{ height: '100%' }}
                container
                direction="column"
                spacing={3}
                wrap="nowrap"
              >
                <Grid item>
                  <Typography variant="h4">{t('selectFile')}</Typography>
                </Grid>

                <Grid item className={classes.gridListContainer}>
                  <div className={classes.gridList}>
                    {files &&
                      files.map(file => (
                        <img
                          key={file.id}
                          className={classes.gridListItem}
                          alt={file.name}
                          src={file.thumbnail}
                          data-id={file.id}
                          onClick={handleSelectChange}
                        />
                      ))}
                  </div>
                </Grid>

                <Grid item>
                  <Button
                    onClick={handleSelect}
                    disabled={!file}
                    variant="contained"
                    color="primary"
                  >
                    {t('selectFile')}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Container>
      </Modal>
    </Box>
  );
};

export default SelectFiles;

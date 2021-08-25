import { Grid, Paper, Typography } from '@material-ui/core';
import OnFetch from 'app/components/block/onFetch/OnFetch';
import Table from 'app/components/block/table/Table';
import { useDeleteFiles } from 'features/media/MediaHooks';
import { useAllMedia } from 'features/media/MediaHooks';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const FileList = () => {
  const { t } = useTranslation();

  const { isLoading, isError, isSuccess, data, refetch } = useAllMedia();

  const { mutate: deleteFiles } = useDeleteFiles();

  const tableData = useMemo(() => data, [data]);

  const columns = useMemo(
    () => [
      {
        Header: t('media.id'),
        accessor: 'id',
      },
      {
        Header: t('media.picture'),
        accessor: 'thumbnail',
        Cell: ({ cell: { value } }) => (
          <img
            width="75"
            height="75"
            style={{ objectFit: 'cover' }}
            alt={value}
            src={value}
          />
        ),
      },
      {
        Header: t('media.name'),
        accessor: 'name',
      },
      {
        Header: t('media.url'),
        accessor: 'url',
      },
    ],
    [t]
  );

  return (
    <Paper>
      <Grid container direction="column" spacing={5}>
        <Grid item>
          <Typography variant="h4">{t('media.list')}</Typography>
        </Grid>

        <Grid item xs={12}>
          {isLoading && <OnFetch variant="loading" />}

          {isError && <OnFetch variant="error" reFetch={refetch} />}

          {isSuccess &&
            (data.length ? (
              <Table
                columns={columns}
                data={tableData}
                deleteHandler={deleteFiles}
              />
            ) : (
              <Typography>{t('media.noFile')}</Typography>
            ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FileList;

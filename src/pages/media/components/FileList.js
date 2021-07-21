import { Grid, Paper, Typography } from '@material-ui/core';
import OnFetch from 'components/onFetch/OnFetch';
import Table from 'components/table/Table';
import { useDeleteFiles } from 'hooks/MediaHooks';
import { useAllMedia } from 'hooks/MediaHooks';
import { useMemo } from 'react';

const FileList = () => {
  const { isLoading, isError, isSuccess, data, refetch } = useAllMedia();

  const { mutate: deleteFiles } = useDeleteFiles();

  const tableData = useMemo(() => data, [data]);

  const columns = useMemo(
    () => [
      {
        Header: 'شناسه',
        accessor: 'id',
      },
      {
        Header: 'تصویر',
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
        Header: 'نام فایل',
        accessor: 'name',
      },
      {
        Header: 'آدرس',
        accessor: 'url',
      },
    ],
    []
  );

  return (
    <Paper>
      <Grid container direction="column" spacing={5}>
        <Grid item>
          <Typography variant="h4">فایل های آپلود شده</Typography>
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
              <Typography>رسانه ای وجود ندارد</Typography>
            ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FileList;

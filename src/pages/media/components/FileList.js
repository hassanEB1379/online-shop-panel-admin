import { Grid, Paper, Typography } from '@material-ui/core';
import Table from 'components/table/Table';
import { useAllMedia } from 'hooks/MediaHooks';
import { useMemo } from 'react';

const FileList = () => {
  const { isLoading, isError, data, error } = useAllMedia();

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
          <img width="75" height="75" alt={value} src={value} />
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

  const tableData = useMemo(() => data, [data]);

  return (
    <Paper>
      <Grid container direction="column" spacing={5}>
        <Grid item>
          <Typography variant="h4">فایل های آپلود شده</Typography>
        </Grid>

        <Grid item xs={12}>
          {isLoading && <Typography variant="h4">در حال بارگذاری</Typography>}

          {isError && <Typography variant="h4">{error.message}</Typography>}

          {data && <Table columns={columns} data={tableData} />}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FileList;

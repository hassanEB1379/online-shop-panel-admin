import { Grid, Paper, Typography } from '@material-ui/core';
import Table from 'components/table/Table';
import { useMemo } from 'react';

const FileList = () => {
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

  const tableData = useMemo(() => [], []);

  return (
    <Paper>
      <Grid container direction="column" spacing={5}>
        <Grid item>
          <Typography variant="h4">فایل های آپلود شده</Typography>
        </Grid>

        <Grid item xs={12}>
          <Table columns={columns} data={tableData} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FileList;

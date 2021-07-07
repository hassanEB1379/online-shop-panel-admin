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
        accessor: 'address',
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        id: 1,
        thumbnail: '/static/images/camera.jpg',
        name: 'camera.jpg',
        address: 'http://localhost:3000/static',
      },
      {
        id: 2,
        thumbnail: '/static/images/ben.jpeg',
        name: 'ben.jpg',
        address: 'http://localhost:3000/static',
      },
      {
        id: 3,
        thumbnail: '/static/images/download.jpg',
        name: 'download.jpg',
        address: 'http://localhost:3000/static',
      },
      {
        id: 4,
        thumbnail: '/static/images/images (1).jpg',
        name: 'images (1).jpg',
        address: 'http://localhost:3000/static',
      },
      {
        id: 5,
        thumbnail: '/static/images/city.jpg',
        name: 'city.jpg',
        address: 'http://localhost:3000/static',
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
          <Table columns={columns} data={data} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FileList;

import {
  Grid,
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Button,
  TableBody,
  Checkbox,
} from '@material-ui/core';

const rows = [
  {
    image: '/static/images/city.jpg',
    name: 'city.jpg',
    url: 'images/city.jpg',
  },
  {
    image: '/static/images/camera.jpg',
    name: 'city.jpg',
    url: 'images/city.jpg',
  },
  {
    image: '/static/images/download.jpg',
    name: 'city.jpg',
    url: 'images/city.jpg',
  },
  {
    image: '/static/images/images (1).jpg',
    name: 'city.jpg',
    url: 'images/city.jpg',
  },
];

const FileList = () => {
  return (
    <Paper>
      <Grid container direction="column" spacing={5}>
        <Grid item>
          <Typography variant="h4">فایل های آپلود شده</Typography>
        </Grid>

        <Grid item>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ردیف</TableCell>
                  <TableCell>تصویر</TableCell>
                  <TableCell>نام فایل</TableCell>
                  <TableCell>آدرس</TableCell>
                  <TableCell align="center">
                    <Button variant="contained">حذف</Button>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <div style={{ width: 80, height: 80 }}>
                        <img
                          style={{ width: '100%', height: '100%' }}
                          alt={row.name}
                          src={row.image}
                        />
                      </div>
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.url}</TableCell>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FileList;

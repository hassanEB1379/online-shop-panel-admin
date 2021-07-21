import { Grid, Paper, Typography } from '@material-ui/core';
import OnFetch from 'components/onFetch/OnFetch';
import PageTitle from 'components/pageTitle/PageTitle';
import Table from 'components/table/Table';
import { useDeleteProducts } from 'hooks/ProductHooks';
import { useAllProducts } from 'hooks/ProductHooks';
import { useMemo } from 'react';

const ProductList = () => {
  const { data, isError, isLoading, refetch, isSuccess } = useAllProducts();

  const { mutate: deleteProducts } = useDeleteProducts();

  const tableData = useMemo(() => data, [data]);

  const columns = useMemo(
    () => [
      {
        Header: 'شناسه',
        accessor: 'id',
      },
      {
        Header: 'عنوان',
        accessor: 'title',
      },
      {
        Header: 'تصویر',
        accessor: 'image',
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
        Header: 'قیمت',
        accessor: 'price',
      },
      {
        Header: 'قیمت با تخفیف',
        accessor: 'priceWithDiscount',
      },
      {
        Header: 'دسته بندی',
        accessor: 'category',
      },
    ],
    []
  );

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item xs={12}>
        <PageTitle title="لیست محصولات" subTitle="مدیریت محصولات" />
      </Grid>

      <Grid item xs={12}>
        <Paper>
          <Grid container>
            <Grid item xs>
              {isLoading && <OnFetch variant="loading" />}

              {isError && <OnFetch variant="error" reFetch={refetch} />}

              {isSuccess &&
                (data.length ? (
                  <Table
                    columns={columns}
                    data={tableData}
                    deleteHandler={deleteProducts}
                  />
                ) : (
                  <Typography>محصولی وجود ندارد</Typography>
                ))}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductList;

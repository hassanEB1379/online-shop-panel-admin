import { Paper, Typography } from '@material-ui/core';
import OnFetch from 'app/components/block/onFetch/OnFetch';
import Table from 'app/components/block/table/Table';
import { useDeleteProducts } from 'features/products/ProductHooks';
import { useAllProducts } from 'features/products/ProductHooks';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const ProductList = () => {
  const { t } = useTranslation();

  const { data, isError, isLoading, refetch, isSuccess } = useAllProducts();

  const { mutate: deleteProducts } = useDeleteProducts();

  const tableData = useMemo(() => data, [data]);

  const columns = useMemo(
    () => [
      {
        Header: t('product.id'),
        accessor: 'id',
      },
      {
        Header: t('product.title'),
        accessor: 'title',
      },
      {
        Header: t('product.picture'),
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
        Header: t('product.price'),
        accessor: 'price',
      },
      {
        Header: t('product.discount'),
        accessor: 'priceWithDiscount',
      },
      {
        Header: t('product.category'),
        accessor: 'category',
      },
    ],
    [t]
  );

  return (
    <Paper>
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
          <Typography>{t('product.noProduct')}</Typography>
        ))}
    </Paper>
  );
};

export default ProductList;

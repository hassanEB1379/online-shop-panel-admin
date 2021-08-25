import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import Input from 'app/components/micro/customInputs/CustomInput';
import Select from 'app/components/micro/customInputs/CustomSelect';
import SelectFiles from 'features/media/components/SelectFiles/SelectFiles';
import { useFormik } from 'formik';
import { useAddProduct } from 'features/products/ProductHooks';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProductSchema as validationSchema } from '../validations/schema';

const sampleOptionsCategory = [
  {
    groupName: 'محصول دیجیتالی',
    options: [
      { value: 'mobile', name: 'موبایل' },
      { value: 'laptop', name: 'لپ تاپ' },
      { value: 'tablet', name: 'تبلت' },
    ],
  },
  {
    groupName: 'لوازم خانگی',
    options: [
      { value: 'television', name: 'تلویزیون' },
      { value: 'refrigerator', name: 'یخچال' },
      { value: 'furniture', name: 'مبلمان' },
    ],
  },
];

const AddProduct = () => {
  const { t } = useTranslation();

  const { mutate: add, isSuccess, isError } = useAddProduct();

  const [productImage, setProductImage] = useState('');

  const { handleSubmit, handleReset, getFieldProps, touched, errors } =
    useFormik({
      initialValues: {
        title: '',
        description: '',
        price: '',
        priceWithDiscount: '',
        category: '',
      },
      validationSchema,
      onSubmit: values => {
        // add product image to values
        values.image = productImage;

        // add product to server
        add(values);
      },
    });

  // reset form if add product success
  useEffect(() => {
    if (isSuccess) handleReset();
  }, [handleReset, isSuccess]);

  return (
    <Paper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <form onSubmit={handleSubmit}>
            <Box paddingBottom="1rem">
              <Button type="submit" variant="contained" color="primary">
                {isError ? t('fetch.reload') : t('product.add')}
              </Button>
            </Box>

            <Input
              id="product-title"
              label={t('product.title')}
              name="title"
              error={touched.title && errors.title}
              {...getFieldProps('title')}
            />

            <Input
              id="product-description"
              label={t('product.desc')}
              multiline
              rows="9"
              name="description"
              error={touched.description && errors.description}
              {...getFieldProps('description')}
            />

            <Grid container spacing={2}>
              <Grid item xs>
                <Input
                  id="product-price"
                  label={t('product.price')}
                  name="price"
                  error={touched.price && errors.price}
                  {...getFieldProps('price')}
                />
              </Grid>

              <Grid item xs>
                <Input
                  id="product-price-discount"
                  label={t('product.discount')}
                  name="priceWithDiscount"
                  error={touched.priceWithDiscount && errors.priceWithDiscount}
                  {...getFieldProps('priceWithDiscount')}
                />
              </Grid>
            </Grid>

            <Select
              id="product-category"
              label={t('product.category')}
              name="category"
              options={sampleOptionsCategory}
              error={touched.category && errors.category}
              {...getFieldProps('category')}
            />
          </form>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6">{t('product.addImg')}</Typography>

          <SelectFiles onSelect={setProductImage} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddProduct;

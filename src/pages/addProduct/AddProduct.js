import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import Input from 'components/customInputs/CustomInput';
import Select from 'components/customInputs/CustomSelect';
import PageTitle from 'components/pageTitle/PageTitle';
import SelectFiles from 'components/selectFiles/SelectFiles';
import { useFormik } from 'formik';
import { useAddProduct } from 'hooks/ProductHooks';
import { useEffect, useState } from 'react';
import { ProductSchema as validationSchema } from 'utils/validations/schema';

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
    <Grid container direction="column" spacing={4}>
      <Grid item xs={12}>
        <PageTitle title="افزودن محصول" subTitle="مدیریت محصولات" />
      </Grid>

      <Grid item xs={12}>
        <Paper>
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <form onSubmit={handleSubmit}>
                <Box paddingBottom="1rem">
                  <Button type="submit" variant="contained" color="primary">
                    {isError ? 'تلاش مجدد' : 'افزودن محصول'}
                  </Button>
                </Box>

                <Input
                  id="product-title"
                  label="عنوان"
                  placeholder="عنوان محصول"
                  name="title"
                  error={touched.title && errors.title}
                  {...getFieldProps('title')}
                />

                <Input
                  id="product-description"
                  label="توضیحات محصول"
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
                      label="قیمت"
                      placeholder="قیمت"
                      name="price"
                      error={touched.price && errors.price}
                      {...getFieldProps('price')}
                    />
                  </Grid>

                  <Grid item xs>
                    <Input
                      id="product-price-discount"
                      label="قیمت با تخفیف"
                      placeholder=" قیمت "
                      name="priceWithDiscount"
                      error={
                        touched.priceWithDiscount && errors.priceWithDiscount
                      }
                      {...getFieldProps('priceWithDiscount')}
                    />
                  </Grid>
                </Grid>

                <Select
                  id="product-category"
                  label="دسته بندی"
                  name="category"
                  options={sampleOptionsCategory}
                  error={touched.category && errors.category}
                  {...getFieldProps('category')}
                />
              </form>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6">افزودن تصویر</Typography>

              <SelectFiles onSelect={setProductImage} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddProduct;

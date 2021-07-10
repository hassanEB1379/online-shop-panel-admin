import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import Input from 'components/customInputs/CustomInput';
import Select from 'components/customInputs/CustomSelect';
import PageTitle from 'components/pageTitle/PageTitle';
import SelectFiles from 'components/selectFiles/SelectFiles';
import { useState } from 'react';

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
  const [productImage, setProductImgage] = useState('');

  console.log(productImage);

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item xs={12}>
        <PageTitle title="افزودن محصول" subTitle="مدیریت محصولات" />
      </Grid>

      <Grid item xs={12}>
        <Paper>
          <form>
            <Grid container spacing={6}>
              <Grid item xs={12} md={8}>
                <Box paddingBottom="1rem">
                  <Button type="submit" variant="contained" color="primary">
                    افزودن محصول
                  </Button>
                </Box>

                <Input
                  id="product-title"
                  label="عنوان"
                  placeholder="عنوان محصول"
                />

                <Input
                  id="product-description"
                  label="توضیحات محصول"
                  multiline
                  rows="9"
                />

                <Grid container spacing={2}>
                  <Grid item xs>
                    <Input id="product-price" label="قیمت" placeholder="قیمت" />
                  </Grid>

                  <Grid item xs>
                    <Input
                      id="product-price-discount"
                      label="قیمت با تخفیف"
                      placeholder=" قیمت "
                    />
                  </Grid>
                </Grid>

                <Select
                  id="product-category"
                  label="دسته بندی"
                  options={sampleOptionsCategory}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography variant="h6">افزودن تصویر</Typography>

                <SelectFiles onSelect={setProductImgage} />
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddProduct;

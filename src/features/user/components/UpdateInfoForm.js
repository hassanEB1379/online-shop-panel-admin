import CustomInput from '../../../app/components/micro/customInputs/CustomInput';
import { Box, Button, Grid } from '@material-ui/core';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { useUser, useUserDispatch } from '../state/UserContext';
import { updateInfo } from '../state/UserReducer';

const UpdateInfoForm = () => {
  const { t } = useTranslation();

  const { info } = useUser();

  const dispatch = useUserDispatch();

  // handle form
  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    initialValues: {
      userName: info.userName,
      email: info.email,
      phone: info.phone,
      password: info.password,
    },
    validationSchema: yup.object({
      userName: yup.string().min(5).required(),
      email: yup.string().email().required(),
      phone: yup.number().required(),
      password: yup.string().min(6).required(),
    }),
    onSubmit: values => dispatch(updateInfo(values)),
  });

  return (
    <Box p="1rem 2rem 0">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomInput
              id="edit-username"
              label={t('info.userName')}
              {...getFieldProps('userName')}
              error={touched.userName && errors.userName}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <CustomInput
              id="edit-email"
              label={t('info.email')}
              type="email"
              {...getFieldProps('email')}
              error={touched.email && errors.email}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <CustomInput
              id="edit-phone"
              label={t('info.phone')}
              {...getFieldProps('phone')}
              error={touched.phone && errors.phone}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <CustomInput
              id="edit-password"
              label={t('info.password')}
              type="password"
              {...getFieldProps('password')}
              error={touched.password && errors.password}
            />
          </Grid>
        </Grid>

        <Box mt="1rem">
          <Button type="submit" variant="contained" color="primary">
            {t('editBtn')}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UpdateInfoForm;

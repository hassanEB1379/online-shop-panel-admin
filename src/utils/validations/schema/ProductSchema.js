import * as yup from 'yup';

export const ProductSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  priceWithDiscount: yup.number(),
  category: yup.string().required(),
});

import { getProducts, addProduct } from 'api/ProductApi';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useAllProducts() {
  return useQuery('products', getProducts, { retry: false });
}

export function useAddProduct() {
  const queryClient = useQueryClient();

  return useMutation(addProduct, {
    onSuccess: () => {
      queryClient.refetchQueries('products');
    },
  });
}

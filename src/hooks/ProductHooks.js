import { getProducts, addProduct, deleteProducts } from 'api/ProductApi';
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

export function useDeleteProducts() {
  const queryClient = useQueryClient();

  return useMutation(deleteProducts, {
    onSuccess: () => {
      queryClient.refetchQueries('products');
    },
  });
}

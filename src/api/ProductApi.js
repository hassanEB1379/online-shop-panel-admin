import axios from 'axios';

export const getProducts = () => {
  return axios.get('http://localhost:9000/products').then(res => res.data);
};

export const addProduct = data => {
  return axios.post('http://localhost:9000/products', data);
};

export const deleteProducts = async ids => {
  const requests = ids.map(id =>
    axios.delete(`http://localhost:9000/products/${id}`)
  );

  return Promise.all(requests);
};

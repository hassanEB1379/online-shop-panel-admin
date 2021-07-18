import axios from 'axios';

export const getProducts = () => {
  return axios.get('http://localhost:9000/products').then(res => res.data);
};

export const addProduct = data => {
  return axios.post('http://localhost:9000/products', data);
};

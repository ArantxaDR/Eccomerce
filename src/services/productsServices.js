import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const getProducts = () => {
  const getAllProducts = axios.get(BASE_URL+"/product ")
    .then((response) => response.data);

  return getAllProducts;

}


export const getDetails = (id) => {
  const getProductDetails = axios.get(BASE_URL+`/product/${id}`)
    .then((response) => response.data);

  return getProductDetails;
}

export const addCart = (productSelection) => {
  const postProduct = axios.post(BASE_URL + "/cart", productSelection)
    .then((response) => response.data);
  return postProduct;
}

import axios from 'axios';

export const getProducts = () => {
  const getAllProducts = axios.get("https://itx-frontend-test.onrender.com/api/product ")
    .then((response) => response.data);

  return getAllProducts;

}


export const getDetails = (id) => {
  const getProductDetails = axios.get(`https://itx-frontend-test.onrender.com/api/product/${id}`)
    .then((response) => response.data);

  return getProductDetails;
}

import axios from 'axios';

export const getProducts = () => {
  const getAllProducts = axios.get("https://itx-frontend-test.onrender.com/api/product ")
    .then((response) => response.data);

  return getAllProducts;

}


export const getDetails = () => {
  const getProductDetails = axios.get(`https://itx-frontend-test.onrender.com/api/product/:product_id`)
    .then((response) => console.log(response.data));

  return getProductDetails;
}

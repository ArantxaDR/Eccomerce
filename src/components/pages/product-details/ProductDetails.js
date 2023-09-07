import React, {  useEffect, useState } from 'react';
import {  Link, useParams } from 'react-router-dom';
import loader from '../../../assets/images/loader.svg';
import { getDetails, addCart } from '../../../services/productsServices';
import { setLocalStorage, getLocalStorage } from '../../../services/LocalStorageService';
import { PERSISTENCE_TIME } from '../../../utils/constants';
import './ProductDetails.scss';

export const ProductDetails = ({setQuantity}) => {
  const params = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    const detailLocal = getLocalStorage('product');
    if (detailLocal?.expiry < Date.now() + PERSISTENCE_TIME) {
      setProduct(detailLocal.value);
    } else{
    getDetails(params.id).then((response) => {
      setProduct(response);
      setLoading(false);
    }).catch((error) => {
      alert('There is an error. Try again later')
    }) }
  }, [params.id]
  );

 
  useEffect(() => {
    setLocalStorage(product?.id, product);
  }, [product]);


  const handleAddToCart= (event) => {
    event.preventDefault();
    const id = product.id;    
    const productSelection = { id }
    addCart(productSelection).then((response) => { 
     setQuantity(response);
    });
  }

    return (
      <>
        <Link to='/'>

          <button className='btn back_btn'>Back to products</button>

        </Link>
        {loading ? <img src={loader} alt='Loading' /> :
          <>
            <div className='details_container'>
              <div className='details_column__1'>
                <img className="detail_img" src={product.thumbnail} alt="product display" />
              </div>
					
              <div className='details_column__2'>
                <div className='details_info'>
                  <ul className='details_info__list'>
                    <li>Brand: {product.brand}</li>
                    <li>Model: {product.title}</li>
                    <li>Price: {product.price}€</li>
                    <li>Description: {product.description}</li>
                    <li>Discount: {product.discountPercentage}%</li>
                  </ul>
                </div>					
                <button className='btn' onClick={handleAddToCart}>Add to shopping cart</button>
              </div>
          
            </div>
        
          </>
        }
     
      </>

    )
  }


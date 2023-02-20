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
  const [selectedColors, setSelectedColors] = useState();
  const [selectedStorage, setSelectedStorage] = useState();  

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
    setSelectedColors(product?.options.colors[0].code);
    setSelectedStorage(product?.options.storages[0].code);
  }, [product]
  );

  useEffect(() => {
    setLocalStorage(product?.id, product);
  }, [product]);

  const handleColorSelection = (event) => {
    setSelectedColors(event.target.value)
  }
  
  const handleStoragesSelection = (event) => {
    setSelectedStorage(event.target.value)
  }

  const handleAddToCart= (event) => {
    event.preventDefault();
    const id = product.id;    
    const colorCode = Number(selectedColors);
    const storageCode = Number(selectedStorage);
    const productSelection = { id, colorCode, storageCode }
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
                <img className="detail_img" src={product.imgUrl} alt="product display" />
              </div>
					
              <div className='details_column__2'>
                <div className='details_info'>
                  <ul className='details_info__list'>
                    <li>Brand: {product.brand}</li>
                    <li>Model: {product.model}</li>
                    <li>Price: {product.price}€</li>
                    <li>CPU: {product.cpu}</li>
                    <li>RAM: {product.ram}</li>
                    <li>O.S: {product.os}</li>
                    <li>Display resolution: {product.displayResolution}</li>
                    <li>Battery: {product.battery}</li>
                    <li>Camera: {product.primaryCamera}</li>
                    <li>Dimentions: {product.dimentions}</li>
                    <li>Weight: {product.weight} gr</li>
                  </ul>
                </div>
                <div className='details_actions'>
                  <label className='details_actions__label'>
                    Pick a color:
                  </label>
                  <select className='details_actions__select' onChange={handleColorSelection} defaultValue={product.options.colors[0].code}>
                    {product.options.colors.map((color) =>
                      <option key={color.code} value={color.code}>{color.name}</option>)}
                  </select>
             
                  <label className='details_actions__label'>
                    Pick a storage:
                  </label>
                  <select className='details_actions__select' onChange={handleStoragesSelection} defaultValue={product.options.storages[0].code}>                   
                    {product.options.storages.map((storage) =>
                      <option key={storage.code} value={storage.code}>{storage.name}</option>)}
                  </select>
                </div>
					
                <button className='btn' onClick={handleAddToCart}>Add to shopping cart</button>
              </div>
          
            </div>
        
          </>
        }
     
      </>

    )
  }


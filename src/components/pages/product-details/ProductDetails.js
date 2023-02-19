import React, {  useEffect, useState } from 'react';
import {  Link, useParams } from 'react-router-dom';
import loader from '../../../assets/images/loader.svg';
import { getDetails } from '../../../services/productsServices';
import './ProductDetails.scss';


export const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedColors, setSelectedColors] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');
  

  useEffect(() => {
    getDetails(params.id).then((response) => {
      setProduct(response);
      setLoading(false);
    })
  }, [params.id]
  );

  useEffect(() => { 
    setSelectedColors(product?.options.colors[0].code);
    setSelectedStorage(product?.options.storages[0].code);
  }, [product]
  );

  const handleColorSelection = (event) => {
    setSelectedColors(event.target.value)
  }
  
  const handleStoragesSelection = (event) => {
    setSelectedStorage(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const productId = product.id;
    const productSelection = { productId, selectedColors, selectedStorage }
    console.log(productSelection)
  }

    return (
      <>
        <Link to='/'>

          <button className='btn back_btn'>Back to products</button>

        </Link>
        {loading ? <img src={loader} alt='Loading' /> :
          <>
            <div className='details_container'>
              <div className='column_1'>
                <img className="detail_img" src={product.imgUrl} alt="product display" />
              </div>
					
              <div className='column_2'>
                <div className='details_info'>
                  <ul className='details_info__list'>
                    <li>{product.brand}</li>
                    <li>{product.model}</li>
                    <li>{product.price}€</li>
                    <li>{product.cpu}</li>
                    <li>{product.ram}</li>
                    <li>{product.os}</li>
                    <li>{product.displayResolution}</li>
                    <li>{product.battery}</li>
                    <li>{product.primaryCamera}</li>
                    <li>{product.dimentions}</li>
                    <li>{product.weight}</li>
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
					
                <button className='btn' onClick={handleSubmit}>Add to shopping cart</button>
              </div>
          
            </div>
        
          </>
        }
     
      </>

    )
  }


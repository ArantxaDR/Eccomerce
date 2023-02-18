import React, {  useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import loader from '../../../assets/images/loader.svg';
import { getDetails } from '../../../services/productsServices';
import shoping from '../../../assets/images/shopping-cart.svg';
import './ProductDetails.scss';
import '../../../styles/_button.scss';

export const ProductDetails = () => {
	const {product_id} = useParams();
	 const [product, setProduct] = useState();
	const [loading, setLoading] = useState(false);

useEffect(()=>{
getDetails().then((response)=>{
	console.log(response)
	setProduct(response);
})
}
)

	return (
		<>
      {loading ? <img src={loader} alt='Loading' /> :
        <>
        <div className='details_container'>
          <div className='column_1'>
            <img className="detail_img" src={shoping} alt="product display" />
          </div>
					
					<div className='column_2'>
            <div className='details_info'>
              <ul className='details_info__list'>
						    <li>Marca</li>
						    <li>Modelo</li>
						    <li>precio</li>
						    <li>CPU</li>
						    <li>RAM</li>
                <li>Sistema operativo</li>
						    <li>resolución de pantalla</li>
						    <li>batería</li>
						    <li>cámaras</li>
						    <li>dimensiones</li>
						    <li>peso</li>
              </ul>
            </div>
            <div className='details_actions'>
              <label className='details_actions__label'>
                Pick a color:
              </label>
              <select className='details_actions__select'>
                <option>Choose...</option>
                  <option>Verde</option>
                  <option>Azul</option>
                  <option>negro</option>
                </select>
             
              <label className='details_actions__label'>
                Pick a storage:
              </label>
              <select className='details_actions__select'>
                  <option>16 gb</option>
                  <option>34 gb</option>
                  <option>180 gb</option>
                </select>
              
					  </div>
					 
            <button className='btn'>Add to shopping cart</button>
          </div>
          
        </div>
          <Link to='/'>
            
              <button className='btn back_btn'>Back to products</button>
            
          </Link>
       </> 
      }
     
		</>

  )
}

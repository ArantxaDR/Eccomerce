import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/productsServices';
import loader from '../../assets/images/loader.svg';
import'./ProductList.scss'

export const ProductList = () => {
	const [products, setProducts] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getProducts().then((response) => {
			setProducts(response);
			console.log(response)
		}).catch(error => {
			alert('There is no products. Try again later');
		})
		setLoading(false);
	},[])
  return (
	  <ul className='products_list'>
		  {loading ? (<img className='loading' src={loader} alt='loader' />) : 
			   products && products.map((product) =>
				   <li key={product.id}>
					   <div>
						   <img src={product.imgUrl} alt={product.model}/>
						   <p>{product.brand} - {product.model}</p>
						   <p>{product.price}</p>
					   </div>
				  </li>
		  )}
		  
	</ul>
  )
}

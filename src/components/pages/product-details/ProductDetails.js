import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import loader from '../../assets/images/loader.svg';

export const ProductDetails = () => {
	const {product_id} = useParams();
	const [product, setProduct] = useState();
	const [loading, setLoading] = useState(false);
	
	useEffect(() => {
		const getProductDetails = () => {
			setLoading(true)
			axios.get(`https://itx-frontend-test.onrender.com/api/product/:${product_id}`)
				.then((response) => console.log(response.data));
			
			setLoading(false);
		
		}
		getProductDetails();
	}, [])
		

	return (
		<>
			{loading ? <img src={loader} alt='Loading' /> :
				<h1>Details</h1>
			}
		</>

  )
}

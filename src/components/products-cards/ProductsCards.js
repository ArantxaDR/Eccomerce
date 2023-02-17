import React from 'react';
import './ProductsCards.scss';

export const ProductsCards = (props) => {
  
  return (
	  <li className='card_item'>
		  <img
			  className='card_item__img'
        alt={props.product.model}
        src={props.product.imgUrl}
      />
      <h1 className="card_item__brand">{props.product.brand}</h1>
      <p className="card_item__model">{props.product.model}</p>
      <p className="card_item__price">{props.product.price} €</p>
	</li>
  )
}

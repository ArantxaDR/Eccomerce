import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/_button.scss';
import './ProductsCards.scss';

export const ProductsCards = (props) => {
  
  return (
	  <li className='card_item'>
		  <img
			  className='card_item__img'
        alt={props.product.model}
        src={props.product.thumbnail}
      />
      <h1 className="card_item__brand">{props.product.brand}</h1>
      <div className='item_info'>
        <p className="card_item__model">{props.product.title}</p>
        <p className="card_item__price">{props.product.price}€</p>
      </div>
      <Link to={`/product/${props.product.id}`} >
        <button className='btn'>View more</button>
      </Link>
	</li>
  )
}

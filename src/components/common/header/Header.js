import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';
import shoping from '../../../assets/images/shopping-cart.svg';
import nautilus from '../../../assets/images/nautilus.png'; 



export const Header = ({quantity}) => {

	return (
		<header className='header_container'>
			<Link to ="/">
				<img className='header_container__logo' src={nautilus} alt='Ecommerce logo'/>
			</Link>
			<div>
				<img className='header_container__icon' src={shoping} alt='Shopping cart' />
				<div className='counter'>{quantity.count}</div>
			</div>
	  </header>
  )
}

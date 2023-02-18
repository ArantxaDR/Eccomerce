import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';
import shoping from '../../../assets/images/shopping-cart.svg';



export const Header = ({products}) => {

	return (
		<header className='header_container'>
			<Link>
				<h1>Napptilus</h1>
			</Link>
			<div>
				<img className='header_container-icon' src={shoping} alt='Shopping cart'/>
			</div>
	  </header>
  )
}

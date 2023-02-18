import React, { useRef } from 'react';
import { ProductsCards } from '../../common/products-cards/ProductsCards';
import search from '../../../assets/images/search.svg';
import './ProductList.scss';

export const ProductList = (props,{page}) => {
  const inputEl = useRef();
  const handleSearch = () => {
    props.searchHandler(inputEl.current.value);
  }
  
  return (
    <div className='products_container'>
      <form className='search_container'>
        <input
          ref={inputEl}
          placeholder='Search phone'
          type='search'
          className='search_input'
          onChange={handleSearch}
          value={props.search}
        />
        <img className='search_icon' src={search} alt='Search icon' />
      </form>
      <ul className='products_list'>
		    {props.products && props.products.map((product) =>
          <ProductsCards key={product.id} product={product} />)
        } 
      </ul>
    </div>
  )
}

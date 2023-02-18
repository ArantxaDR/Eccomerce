import { useEffect, useState } from 'react';
import { Header } from './components/common/header/Header';
import { ProductList } from './components/pages/products-list/ProductList';
import { getProducts } from './services/productsServices';
import {ProductDetails} from './components/pages/product-details/ProductDetails';
import loader from './assets/images/loader.svg';
import { Route, Router, Routes } from 'react-router';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    }).catch(error => {
      alert('There is no products. Try again later');
    })
    setLoading(false);
  }, []);

  const searchHandler =(search)=>{
    setSearch(search);
    if(search!==''){
      const newProductList =products.filter((product)=>{
        return Object.values(product)
        .join(" ").toLowerCase()
        .includes(search.toLowerCase());
      });
      setSearchResult(newProductList);
    } else {
      setSearchResult(products);
    }
  }

  return (
   <>
      <Header/>
        <main className='container'>
          {loading ? <img src={loader} alt='Loading'/>:
          <ProductList 
            products={search.length <1 ? products : searchResult} 
            search={search} 
            searchHandler={searchHandler}
            />}     
        </main>
    </>

  );
}

export default App;

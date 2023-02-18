import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Header } from './components/common/header/Header';
import { ProductList } from './components/pages/products-list/ProductList';
import { getProducts } from './services/productsServices';
import { ProductDetails } from './components/pages/product-details/ProductDetails';
import { Pagination } from './components/common/pagination/Pagination';
import { PRODUCT_PER_PAGE } from './utils/constants';
import loader from './assets/images/loader.svg';


function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
      setTotalPages(Math.ceil(response.length / PRODUCT_PER_PAGE));
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
  const handleClick = num => {
    setPage(num);
  }
  const selectedProducts = products.slice(page, page + PRODUCT_PER_PAGE);

  return (
   <>
      <Header products={products} />
     
      <main className='container'>
        <Pagination totalPages={totalPages} handleClick={handleClick} />
        
        {loading ? <img src={loader} alt='Loading' /> :
          <>
            {}
           
          <Routes>
            <Route path='/' element={
              <ProductList
                products={search.length < 1 ? selectedProducts : searchResult}
                search={search}
                searchHandler={searchHandler}
                page={page}
              />
            }
            />            
            <Route path='/product/:product_id' element={<ProductDetails/>} />

            </Routes>
          </>
          }
       
        </main>
    </>

  );
}

export default App;

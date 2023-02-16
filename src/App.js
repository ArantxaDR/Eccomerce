import { Header } from './components/header/Header';
import { ProductList } from './components/product-list/ProductList';
import './App.scss';

function App() {
  return (
    <>
    <Header/>
      <main className='container'>
        <ProductList/>
      </main>
    </>
  );
}

export default App;

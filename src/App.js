import { Header } from './components/header/Header';
import { ProductList } from './components/products-list/ProductList';
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

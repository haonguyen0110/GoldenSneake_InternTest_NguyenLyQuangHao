
import './App.scss';
import Cart from './components/cart/Cart';
import ProductCard from './components/productCard/ProductCard';
import listShoes from './data/shoes.json'
function App() {
  return (
    <div className="App">
      <div className='wrapContent'>
        <ProductCard Shoes={listShoes.shoes} />
        <Cart />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Cart from './components/cart';
import ProductList from './components/productList';

function App() {
  return (
    <div className="App">
      <h1> E-commerce App</h1>
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
}

export default App;

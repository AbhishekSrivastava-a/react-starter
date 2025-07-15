import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { name: 'Lenovo', price: 70000 },
    { name: 'Dell', price: 65000 },
    { name: 'HP', price: 60000 },
  ];

  return (
    <div>
      <h2>Products:</h2>
      {products.map((item, index) => (
        <div key={index}>
          <p>{item.name} - ₹{item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

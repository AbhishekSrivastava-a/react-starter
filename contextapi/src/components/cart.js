import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const Cart = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <div className="cart">
      <h3>🛒 Cart Items:</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
      <h4>Total: ₹{total}</h4>
    </div>
  );
};

export default Cart;

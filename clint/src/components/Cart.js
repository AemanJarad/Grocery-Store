// src/components/Cart.js
import React from 'react';
import '../App.css';


const Cart = ({ cartItems, removeFromCart, totalPrice, checkout }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button className="checkout" onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;

// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './components/Product';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const checkout = () => {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    axios.post('http://localhost:5000/order', { products: cart, totalPrice })
      .then(response => {
        alert('Order placed successfully!');
        setCart([]);
      })
      .catch(error => console.log(error));
  };

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="App">
      <h1>Grocery Store</h1>
      <div className="dishes">
        <ul>
          {products.map((product, index) => (
            <Product key={index} product={product} addToCart={addToCart} />
          ))}
        </ul>
      </div>
      <Cart cartItems={cart} removeFromCart={removeFromCart} totalPrice={totalPrice} checkout={checkout} />
    </div>
  );
};

export default App;

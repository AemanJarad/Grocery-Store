// src/components/Product.js
import React from 'react';
import './Product.css';

const Product = ({ product, addToCart }) => {
  return (
    <li className="product">
      <img className="defaultImg" src={product.defaultImg} alt={product.name} />
      <img className="hoverImg" src={product.hoverImg} alt={product.name} />
      <p><a href={product.link}>{product.name}</a></p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </li>
  );
};

export default Product;

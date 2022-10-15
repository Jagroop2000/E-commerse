import React, { useEffect, useState } from 'react';
import './Cards.css';

function Cards({ category }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}?limit=4`)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
  });

  return (
    <div id='space'>
      <section id='products1' className='section-p1'>
        <h2>Products</h2>
        <p>{category}</p>
        <div className='pro-container'>
          {products.map((product) => (
            <div className='pro'>
              <img src={product.image} height='100' alt={product.title}></img>
              <div className='des'>
                <span>{product.title}</span>
                <h5>{product.category}</h5>
                <div className='star'>
                  <i className='fas fa-star' />
                </div>
                <h4>$ {product.price}</h4>
              </div>
              {/* <a href='#'>
                <CheckIcon className='s-cart' />
              </a> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Cards;

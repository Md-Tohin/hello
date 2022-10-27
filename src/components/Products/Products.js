import React from 'react';
import './Products.css';

const Products = ({ product, addToCartProduct }) => {
    const {name, price, seller, ratings} = product;
    return (
        <div className="product-item">
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Manufacture: {seller}</p>
            <p>Rating: {ratings}</p>
            <button onClick={()=>addToCartProduct(product)}>Add To Cart</button>
        </div>
    );
};

export default Products;
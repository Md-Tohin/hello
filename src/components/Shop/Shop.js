import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import './Shop.css';
import { addToCartLS, savedCart } from '../../utilities/Calculation';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(resp => resp.json())
            .then(data => setProducts(data));
    }, []);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCartProducts = savedCart();
        let newCart = [];
        for (const id in savedCartProducts) {
            const product = products.find(product => product.id === id);
            if (product) {
                product.quantity = savedCartProducts[id];
                newCart.push(product);
            }
        }
        setCart(newCart);
    }, [products]);

    const addToCartProduct = (selectedProduct) => {
        let newCart = [];
        const rest = cart.filter(product => product.id !== selectedProduct.id);
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (exists) {
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        } else {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        setCart(newCart);
        addToCartLS(selectedProduct);
    }

    return (
        <div className='main-container'>
            <div className='shop-container'>
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        addToCartProduct={addToCartProduct}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <h1>Cart Summary</h1>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let shippingCharge = 0;
    let quantity = 0;
    for (const item of cart) {
        quantity = quantity + item.quantity;
        totalPrice = totalPrice + item.price * item.quantity;
        shippingCharge = shippingCharge + item.shipping;
    }
    const tax = +(totalPrice * 0.1).toFixed(1);
    const grandTotal = totalPrice + shippingCharge + tax;
    return (
        <div className='cart-details'>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping Price: ${shippingCharge}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;
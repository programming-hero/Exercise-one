import React, { useState } from 'react';

const Cart = (props, product) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = product.price;
    }

      return (
        <div>
            <h3>Total add friend: { cart.length}</h3>
            
            <h4> Total Salary : {total}</h4>
            </div>
        
    )
};

export default Cart;
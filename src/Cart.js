import React, { useState } from 'react';
import { useSelector, useDispatch} from  'react-redux';
import CartItem from './CartItem';
import './Cart.css'
import DiscountForm from './DiscountForm';

function Cart() {
    const { cart, products } = useSelector(store => store);


    const items = cart.items.map(itemData => {
        const item = products.find(product => product.id === itemData.id);
        return <li key={itemData.id}>
                <CartItem
                    id={itemData.id} 
                    name={item.name}
                    price={item.price}
                    image_url={item.image_url}
                    single={false}
                    quantity={itemData.quantity} />
                </li>
    })


    return (
        <div className="Cart">
            <h1>Your Cart</h1>
            <div className="Cart-Title">
                <div>Items</div>
                <div>Quantity</div>
            </div>
            <ul className="Cart-list">
            {items}
            </ul>
            {cart.length === 0 ? <div>Nothing in your cart yet!</div> : 
                <>
                    <div className="Cart-Total"><b>Total:</b> ${cart.total.toFixed(2)}</div>
                    <DiscountForm />
                    {cart.discountApplied && <div><b>Discount applied</b></div>}
                </>}
        </div>
    );
}

export default Cart;

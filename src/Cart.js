import React from 'react';
import { useSelector} from  'react-redux';
import CartItem from './CartItem';
import './Cart.css'

function Cart() {
    const cart = useSelector(store => store.cart);
    const products = useSelector(store => store.products);
    let total = 0;

    const items = cart.map(itemData => {
        const item = products.find(product => product.id === itemData.id);
        total += item.price * itemData.quantity;
        return <li>
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
            {cart.length === 0 ? <div>Nothing in your cart yet!</div> : <div className="Cart-Total"><b>Total:</b> {total.toFixed(2)}</div>}
        </div>
    );
}

export default Cart;

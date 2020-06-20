import React, { useState } from 'react';
import { useSelector} from  'react-redux';
import CartItem from './CartItem';
import './Cart.css'
import DiscountForm from './DiscountForm';

function Cart() {
    const [ discount, setDiscount ] = useState(0);
    const [ error, setError ] = useState(false);
    const { cart, products } = useSelector(store => store);

    const items = cart.map(itemData => {
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

    const appyDiscount = amount => {
        // if (discount === 0){
        //     setDiscount(discount => total * amount)
        // }
        // else {
        //     setError(true)
        // }
    }

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
                    <DiscountForm applyDiscount={appyDiscount}/>
                    {error && <div><b>Discount already applied</b></div>}
                </>}
        </div>
    );
}

export default Cart;

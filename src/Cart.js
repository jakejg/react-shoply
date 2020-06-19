import React from 'react';
import { useSelector} from  'react-redux';
import CartItem from './CartItem';

function Cart() {
    const cart = useSelector(store => store.cart);
    const products = useSelector(store => store.products);

    const items = cart.map(itemData => {
        const item = products.find(product => product.id === itemData.id);
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
            <ul>
            {items}
            </ul>
        </div>
    );
}

export default Cart;

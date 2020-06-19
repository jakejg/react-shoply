import React from 'react';
import Item from './Item';
import './Cart.css'
  
const CartItem = ({ id, name, price, description, image_url, single=true, quantity}) => {

    return (
        <div className="Cart-Item">
            <Item 
            id={id} 
            name={name}
            price={price}
            description={description}
            image_url={image_url}
            single={false} />
            <div className="Cart-Quantity">{quantity}</div>
        </div>
    )
}

export default CartItem
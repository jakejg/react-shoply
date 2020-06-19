import React, { useState } from 'react';
import { useDispatch } from  'react-redux';
import { add, remove } from './Reducers/actionCreators';
import { Button } from 'reactstrap';
import Item from './Item';
  
const CartItem = ({ id, name, price, description, image_url, single=true, quantity=0 }) => {
    // const [ quantity, setQuanitiy ] = useState(quantity);

    return (
        <div>
            <Item 
            id={id} 
            name={name}
            price={price}
            description={description}
            image_url={image_url}
            single={false} />
            <div>{quantity}</div>
        </div>
    )
}

export default CartItem
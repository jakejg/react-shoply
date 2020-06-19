import React from 'react';
import { useDispatch } from  'react-redux';
import { add, remove } from './Reducers/actionCreators';
import { Button } from 'reactstrap';
import './Item.css';
  
const Item = ({ id, name, price, description, image_url }) => {

    const dispatch = useDispatch();

    const addToCart = (id) => {
        dispatch(add(id))
    }

    const removeFromCart = (id) => {
        dispatch(remove(id))
    }

    let capitalized = name.split('').map((char, i) => {
        if (i === 0) return char.toUpperCase();
        else return char;
    }).join('')

    return (
        <div className="Item" >
            <img className="Item-image" src={image_url} alt="Product" />
            <div className="Item-body">
                <div><b>{capitalized}</b></div>
                {/* <div>{description}</div>
                <div><b>Price: {price}</b></div> */}
                <Button color="success" className="m-2" onClick={() => addToCart(id)}>Add to Cart</Button>
                <Button color="danger" className="m-2" onClick={() => removeFromCart(id)}>Remove from Cart</Button>
            </div>
        </div>
    )
}

export default Item
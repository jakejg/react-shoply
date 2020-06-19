import React from 'react';
import { useDispatch } from  'react-redux';
import { add, remove } from './Reducers/actionCreators';
import { Button } from 'reactstrap';
import './Item.css';
  
const Item = ({ id, name, price, description, image_url, single=true }) => {

    const dispatch = useDispatch();

    const addToCart = (id, e) => {
        e.preventDefault();
        dispatch(add(id))
    }

    const removeFromCart = (id, e) => {
        e.preventDefault();
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
                {single && 
                    <>
                        <div>{description}</div>
                        <div><b>Price: {price}</b></div>
                    </>}
                <Button color="success" className="m-2" onClick={(e) => addToCart(id, e)}>Add to Cart</Button>
                <Button color="danger" className="m-2" onClick={(e) => removeFromCart(id, e)}>Remove from Cart</Button>
            </div>
        </div>
    )
}

export default Item
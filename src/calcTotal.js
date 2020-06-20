import React from 'react';
import { useSelector } from 'react-redux';

const CalcTotal = (cart) =>{
    let total = 0;
    const { products } = useSelector(store => store);

    for (let itemData of cart) {
        const item = products.find(product => product.id === itemData.id);
        total += item.price * itemData.quantity;
    }
        
    return total
}

export default CalcTotal;
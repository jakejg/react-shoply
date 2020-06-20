import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyDiscount } from './Reducers/actionCreators';

function DiscountForm() {
    const [discountInput, setDiscountInput] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setDiscountInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (discountInput === 'REMOVE10') {
            dispatch(applyDiscount(.1))
        }
        else if (discountInput === 'REMOVE20') {
            dispatch(applyDiscount(.2))
        }
        else if (discountInput === 'REMOVE30') {
            dispatch(applyDiscount(.3))
        }
    }

    return (
        <div className="DiscountForm">
            <form>
                <label>Enter Discount Code</label>
                <input type="text" value={discountInput} onChange={handleChange} />
                <button onClick={handleSubmit}>Apply!</button>
            </form>
        </div>
    );
}

export default DiscountForm;

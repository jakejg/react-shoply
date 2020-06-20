import React, { useState } from 'react';

function DiscountForm({applyDiscount}) {
    const [discountInput, setDiscountInput] = useState('');

    const handleChange = (e) => {
        setDiscountInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (discountInput === 'REMOVE10') {
            applyDiscount(.1)
        }
        else if (discountInput === 'REMOVE20') {
            applyDiscount(.2)
        }
        else if (discountInput === 'REMOVE30') {
            applyDiscount(.3)
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

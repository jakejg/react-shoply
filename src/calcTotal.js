
const CalcTotal = (cart, discountAmount) =>{
    let total = 0;

    for (let itemData of cart) {
        total += itemData.price * itemData.quantity;
    }
    if (discountAmount) {
        total -= total * discountAmount;
    }
        
    return total;
}

export default CalcTotal;
import { ADD, REMOVE, APPLY_DISCOUNT } from './actionTypes';
import calcTotal from '../calcTotal';

const INITIAL_STATE = {items: [],
                        total: 0,
                        discountApplied: false,
                        discountAmount: 0 };

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        // if the item is in the cart add 1 to the quantity, if not add a new item
        case ADD:
            let items;
            if (state.items.some(item => item.id === action.id)) {
                items = state.items.map(item => {
                    if (item.id === action.id) {
                        return {...item, quantity: item.quantity + 1}
                    }
                    return item
                })
            }
            else {
                items = [...state.items, {id: action.id, quantity: 1, price: action.price}]        
            }
            return {
                items,
                total: calcTotal(items),
                discountApplied: false,
                discountAmount: 0
            }

         // if there is more than one of an item, decrease the quantity by 1 and add it to the new array.
        case REMOVE:
            let reducedItems = [];
            for (let item of state.items){
                if (item.id === action.id) {
                    if (item.quantity > 1) {
                        reducedItems.push({...item, quantity: item.quantity - 1});
                    }
                }
                else {
                    reducedItems.push(item);
                }
            }
            return {
                items: reducedItems,
                total: calcTotal(reducedItems),
                discountApplied: false,
                discountAmount: 0
            }
        case APPLY_DISCOUNT:
            let total = state.total;
            if (!state.discountApplied) {
                total = calcTotal(state.items, action.amount)
            }
            return {
                ...state,
                total,
                discountApplied: true,
                discountAmount: 0
            }


        default:
            return state
    }
}

export default cartReducer;
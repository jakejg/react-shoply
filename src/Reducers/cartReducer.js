import { ADD, REMOVE } from './actionTypes';
const INITIAL_STATE = [];

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        // if the item is in the cart add 1 to the quantity, if not add a new item
        case ADD:
            if (state.some(item => item.id === action.id)) {
                return state.map(item =>{
                    if (item.id === action.id) {
                        return {id: item.id, quantity: item.quantity + 1}
                    }
                    return item
                })
            }
            else {
                return [...state, {id: action.id, quantity: 1}]
            }

         // if there is more than one of an item, decrease the quantity by 1, otherwise delete it.
        case REMOVE:
            const newState = [];
            for (let item of state){
                if (item.id === action.id) {
                    if (item.quantity > 1) {
                        newState.push({id: item.id, quantity: item.quantity - 1});
                    }
                }
                else {
                    newState.push(item);
                }
            }
            return newState;

        default:
            return state
    }
}

export default cartReducer;
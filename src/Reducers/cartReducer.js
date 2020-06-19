import { ADD, REMOVE } from './actionTypes';
const INITIAL_STATE = [];

const cartReducer = (state=INITIAL_STATE, action) => {
    if (action.type === ADD) {
        return [...state, action.id];
    }

    if (action.type === REMOVE) {
        const idx = state.findIndex(id => id === action.id);
        if (idx >= 0) return [...state.slice(0, idx), ...state.slice(idx + 1)];
        else return state;

    }
    return state
}

export default cartReducer;
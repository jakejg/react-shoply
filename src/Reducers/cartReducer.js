import { ADD, REMOVE } from './actionTypes';
const INITIAL_STATE = [];

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.id];

        case REMOVE:
            const idx = state.findIndex(id => id === action.id);
            if (idx >= 0) return [...state.slice(0, idx), ...state.slice(idx + 1)];
            else return state;

        default:
            return state
    }
}

export default cartReducer;
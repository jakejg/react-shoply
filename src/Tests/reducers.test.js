import cartReducer from '../Reducers/cartReducer';
import { ADD, REMOVE } from '../Reducers/actionTypes';


test('can add an item to the cart', () => {
    expect(cartReducer([], {type: ADD, id: 'asd13'})).toEqual(['asd13']);
})

test('can add a duplicate item to the cart', () => {
    expect(cartReducer(['asd13'], {type: ADD, id: 'asd13'})).toEqual(['asd13', 'asd13']);
})

test('can remove 1 of the duplicate items from the car', () => {
    expect(cartReducer(['asd13', 'asd13'], {type: REMOVE, id: 'asd13'})).toEqual(['asd13']);
})
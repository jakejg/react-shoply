import cartReducer from '../Reducers/cartReducer';
import { ADD, REMOVE } from '../Reducers/actionTypes';


test('can add an item to the cart', () => {
    expect(cartReducer([], {type: ADD, id: 'asd13' })).toEqual([{id: 'asd13', quantity: 1}])
})

test('can add a duplicate item to the cart', () => {
    expect(cartReducer([{id: 'asd13', quantity: 1}], {type: ADD, id: 'asd13'})).toEqual([{id: 'asd13', quantity: 2}]);
})
test('can add a another item to the cart', () => {
    expect(cartReducer([{id: 'asd13', quantity: 2}], {type: ADD, id: '93ju2'})).toEqual([{id: 'asd13', quantity: 2}, {id: '93ju2' , quantity: 1}]);
})

test('can remove 1 of the duplicate items from the car', () => {
    expect(cartReducer([{id: 'asd13', quantity: 2}, {id: '93ju2' , quantity: 1}], {type: REMOVE, id: 'asd13'})).toEqual([{id: 'asd13', quantity: 1}, {id: '93ju2' , quantity: 1}]);
})
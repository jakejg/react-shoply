import cartReducer from '../Reducers/cartReducer';
import { ADD, REMOVE } from '../Reducers/actionTypes';


test('can add an item to the cart', () => {
    expect(cartReducer({items: [],
        total: 0,
        discountApplied: false,
        discountAmount: 0 }, {type: ADD, id: 'asd13', price: 10.50 })).toEqual({items: [{id: 'asd13', quantity: 1, price: 10.50}], 
                                                                                total: 10.50, 
                                                                                discountApplied: false, 
                                                                                discountAmount: 0})
})

test('can add a duplicate item to the cart', () => {
    expect(cartReducer({items: [{id: 'asd13', quantity: 1, price: 10.50}], 
                        total: 10.50, 
                        discountApplied: false, 
                        discountAmount: 0}, {type: ADD, id: 'asd13', price: 10.50})).toEqual({items: [{id: 'asd13', quantity: 2, price: 10.50}], 
                                                                                            total: 21.00, 
                                                                                            discountApplied: false, 
                                                                                            discountAmount: 0})
})
test('can add a another item to the cart', () => {
    expect(cartReducer({items: [{id: 'asd13', quantity: 2, price: 10.50}], 
                        total: 21.00, 
                        discountApplied: false, 
                        discountAmount: 0}, {type: ADD, id: '93ju2', price: 2.00})).toEqual({items: [{id: 'asd13', quantity: 2, price: 10.50}, {id: '93ju2', quantity: 1, price: 2.00}], 
                                                                                            total: 23.00, 
                                                                                            discountApplied: false, 
                                                                                            discountAmount: 0});
})

test('can remove 1 of the duplicate items from the car', () => {
    expect(cartReducer({items: [{id: 'asd13', quantity: 2, price: 10.50}, {id: '93ju2', quantity: 1, price: 2.00}], 
                        total: 24.00, 
                        discountApplied: false, 
                        discountAmount: 0}, {type: REMOVE, id: 'asd13'})).toEqual({items: [{id: 'asd13', quantity: 1, price: 10.50}, {id: '93ju2', quantity: 1, price: 2.00}], 
                                                                                    total: 12.50, 
                                                                                    discountApplied: false, 
                                                                                    discountAmount: 0});
})
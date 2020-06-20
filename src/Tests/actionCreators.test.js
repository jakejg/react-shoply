import {add, remove, applyDiscount } from '../Reducers/actionCreators';
import { ADD, REMOVE, APPLY_DISCOUNT } from '../Reducers/actionTypes';

test('will return an object with type:add and id:1', () => {
    const a = add(1, 10.50);
    expect(a).toEqual({type: ADD, id: 1, price: 10.50})
})

test('will return an object with type:remove and id:1', () => {
    const r = remove(1);
    expect(r).toEqual({type: REMOVE, id: 1})
})

test('will return an object with type:apply_discount and amount:.1', () => {
    const apply = applyDiscount(.1)
    expect(apply).toEqual({type: APPLY_DISCOUNT, amount: .1})
})


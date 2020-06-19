import {add, remove } from '../Reducers/actionCreators';
import { ADD, REMOVE } from '../Reducers/actionTypes';

test('will return an object with type:add and id:1', () => {
    const a = add(1);
    expect(a).toEqual({type: ADD, id: 1})
})

test('will return an object with type:remove and id:1', () => {
    const r = remove(1);
    expect(r).toEqual({type: REMOVE, id: 1})
})


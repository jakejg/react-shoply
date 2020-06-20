import { ADD, REMOVE, APPLY_DISCOUNT } from './actionTypes';

export const add = (id, price) => ({type: ADD, id, price});

export const remove = (id) => ({type: REMOVE, id});

export const applyDiscount = (amount) => ({type: APPLY_DISCOUNT, amount});

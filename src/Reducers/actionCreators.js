import { ADD, REMOVE } from './actionTypes';

export const add = (id) => ({type: ADD, id});

export const remove = (id) => ({type: REMOVE, id});

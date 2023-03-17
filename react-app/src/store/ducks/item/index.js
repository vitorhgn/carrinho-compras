import { createAction, createReducer } from "@reduxjs/toolkit"

const INITIAL_STATE = []


export const addItem = createAction('ADD_ITEM');
export const addItens = createAction('ADD_ITENS')



export default createReducer(INITIAL_STATE, {
    [addItem.type]: (state, action) => [...state, action.payload],
    [addItens.type]: (state, action) => [...action.payload]
})

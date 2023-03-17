import { createAction, createReducer } from "@reduxjs/toolkit";

const INITAL_STATE = [];

export const addItemToCart = createAction("ADD_ITEM_TO_CART");
export const removeItemFromCart = createAction("REMOVE_ITEM_FROM_CART");
export const updateCartRemove = createAction("UPDATE_REMOVE_CART");
export const updateCartAdd = createAction("UPDATE_ADD_CART");

export default createReducer(INITAL_STATE, {
  [addItemToCart.type]: (state, action) => {
    let sequence = state.length + 1;
    let quantity = 1;
    let item = state.filter((item) => item.product.id === action.payload.id);
    if (item.length > 0) {
      sequence = item[0].sequence;
      quantity = item[0].quantity + 1;
    }
    const itens = state.filter((item) => item.product.id !== action.payload.id);
    itens.push({sequence, product: action.payload, quantity });
    return itens.sort((a, b) => a.sequence - b.sequence);
  },
  [removeItemFromCart.type]: (state, action) =>
    state.filter((item) => item.product.id !== action.payload),

  [updateCartRemove.type]: (state, action) =>{
    const item = state.filter((item) => item.product.id === action.payload)[0];
    const itens = state.filter((item) => item.product.id !== action.payload);
    itens.push({ sequence: item.sequence, product: item.product, quantity: item.quantity - 1 });
    return itens.sort((a, b) => a.sequence - b.sequence);
  },

  [updateCartAdd.type]: (state, action) =>{
    const item = state.filter((item) => item.product.id === action.payload)[0];
    const itens = state.filter((item) => item.product.id !== action.payload);
    itens.push({ sequence: item.sequence, product: item.product, quantity: item.quantity + 1 });
    return itens.sort((a, b) => a.sequence - b.sequence);
  }
});

import { createAction } from "../../utils/reducer/reducer.utils";

import CART_ACTION_TYPES from './cart.types';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

  if(existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    );
  }
  return [ ...cartItems, {...productToAdd, quantity: 1 } ]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  //find tje cartItem to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  //check if the quantity is equal to 1
  //if it is remove that item from the cart
  if(existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  //return back cartItems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  );
}

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem)=> cartItem.id !== cartItemToClear.id)

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
  
//these 3 methods are now Actions creators
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
  //remove Items
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

  //clear items
export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

/*
export const setCartItems = (cartItems) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)

export const setCartCount = () =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS)

export const setPriceCount = () =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS)
 */
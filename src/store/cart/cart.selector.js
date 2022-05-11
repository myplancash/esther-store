import { createSelector } from 'reselect';

export const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
)

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
)


export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)

export const selectPriceCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price, 0)
)
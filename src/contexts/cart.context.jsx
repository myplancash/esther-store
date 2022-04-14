import { useState, useEffect, createContext } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

  if(existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }
  return [ ...cartItems, {...productToAdd, quantity: 1 } ]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  //find tje caartitem to remove
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

  //check if the quantity is equal to 1
  //if it is remove that item from the cart
  if(existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  //return back cartItems with matching cart item with reduced quantity
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  );
}

const clearItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  removeItemToCart: () => {},
  clearItemToCart: () => {},
  totalPrice: () => {},
  cartCount: 0,
  priceCount: 0,
})

export const CartProvider = ({children}) => {
  const [ isCartOpen, setIsCartOpen ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartCount, setCartCount ] = useState(0);
  const [ priceCount, setPriceCount ] = useState(0);

  //Cart total quantity:
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount);

  }, [cartItems]);

  //Cart total price:
  useEffect(() => {
    const newPriceCount = cartItems.reduce((totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price, 0)
    setPriceCount(newPriceCount);

  }, [cartItems]);

  //add Items
  const addItemsToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  //remove Items
  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  //clear items
  const clearItemToCart = (cartItemToClear) => {
    setCartItems(clearItem(cartItems, cartItemToClear))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemsToCart,
    removeItemToCart,
    clearItemToCart,
    cartItems,
    cartCount,
    priceCount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
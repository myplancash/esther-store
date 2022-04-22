import {createContext, useReducer } from 'react';
import {createAction} from '../utils/reducer/reducer.utils';

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

const clearItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemToCart: () => {},
  cartCount: 0,
  priceCount: 0,
})

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  priceCount: 0,
}


const cartReducer = (state, action) => {
  const {type, payload} = action

  switch(type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }
    default:
      //cartReducer should only be receiving actions that we have accounted for
      throw new Error(`unhandled type: ${type} in cartReducer`);
  }
}



export const CartProvider = ({children}) => {
  /* const [ {isCartOpen}, dispatch ] = useReducer(cartReducer, INITIAL_STATE);
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

  }, [cartItems]);  */

  const [{ isCartOpen, cartItems, cartCount, priceCount }, dispatch ] =
  useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity, 0)

    const newPriceCount = newCartItems.reduce(
      (totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price, 0)


    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        priceCount: newPriceCount
      }))
  }

  //add Items
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  }

  //remove Items
  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    updateCartItemsReducer(newCartItems)
  }

  //clear items
  const clearItemToCart = (cartItemToClear) => {
    const newCartItems = clearItem(cartItems, cartItemToClear)
    updateCartItemsReducer(newCartItems)
  }

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemToCart,
    cartItems,
    cartCount,
    priceCount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
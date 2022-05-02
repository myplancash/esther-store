// import { useContext } from 'react';
import { useDispatch } from 'react-redux';
// import {CartContext} from '../../contexts/cart.context';
import { clearItemToCart } from '../../store/cart/cart.action';

import {CartItemContainer, ItemDetails, CloseSymbol} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  // const { clearItemToCart } = useContext(CartContext)
  const {quantity, name, imageUrl, price} = cartItem;

  // const clearItemHandler = () => clearItemToCart(cartItem)
  const clearItemHandler = dispatch(clearItemToCart(cartItem));


  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${quantity * price}
        </span>
      </ItemDetails>
      <CloseSymbol onClick={clearItemHandler}>&#10005;</CloseSymbol>
    </CartItemContainer>
  )

}

export default CartItem;
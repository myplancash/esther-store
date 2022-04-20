import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';

import {CartItemContainer, ItemDetails, CloseSymbol} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {

  const { clearItemToCart } = useContext(CartContext)
  const {quantity, name, imageUrl, price} = cartItem;

  const clearItemHandler = () => clearItemToCart(cartItem)


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
import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';

import {
  CheckoutItemsContainer,
  Items,
  ImageContainer,
  Quantity,
  Name,
  Price,
  RemoveButton,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;

  const { addItemToCart, removeItemToCart, clearItemToCart } = useContext(CartContext);
  const removeItemHandler = () => removeItemToCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const clearItemHandler = () => clearItemToCart(cartItem)

  return (
    <CheckoutItemsContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`}/>
      </ImageContainer>
      <Items>
        <Name>{name}</Name>
        <Quantity>
          <div onClick={removeItemHandler}>&#10094;</div>
            <span>{quantity}</span>
          <div onClick={addItemHandler}>&#10095;</div>
        </Quantity>
        <Price>${price}</Price>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
      </Items>
    </CheckoutItemsContainer>
  )
}

export default CheckoutItem;
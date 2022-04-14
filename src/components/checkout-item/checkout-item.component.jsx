import './checkout-item.styles.scss';
import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;

  const { addItemsToCart, removeItemToCart, clearItemToCart } = useContext(CartContext);
  const removeItemHandler = () => removeItemToCart(cartItem)
  const addItemHandler = () => addItemsToCart(cartItem)
  const clearItemHandler = () => clearItemToCart(cartItem)

  return (
    <div className="checkout-items-container">
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`}/>
      </div>
      <div className='items'>
        <span className="name">{name}</span>
        <span className='quantity'>
          <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
            <span className="value">{quantity}</span>
          <div className="arrow" onClick={addItemHandler}>&#10095;</div>
        </span>
        <span className="price">${price}</span>
        <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
      </div>
    </div>
  )
}

export default CheckoutItem;
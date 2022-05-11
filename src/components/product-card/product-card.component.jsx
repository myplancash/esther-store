import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardContainer, ProductCardFooter, Name, Price } from './product-card.styles.jsx';
// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
  // const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems =  useSelector(selectCartItems)
  
  const addItemHandler = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </ProductCardFooter>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addItemHandler} >Add to card</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
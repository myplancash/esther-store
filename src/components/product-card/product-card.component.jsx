import {ProductCardContainer, ProductCardFooter, Name, Price } from './product-card.styles.jsx';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {

  const { addItemsToCart } = useContext(CartContext);

  const addProductToCart = () => addItemsToCart(product)

  const { name, price, imageUrl } = product;
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </ProductCardFooter>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} >Add to card</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
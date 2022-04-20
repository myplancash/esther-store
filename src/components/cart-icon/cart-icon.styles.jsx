import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const StyledShoppingIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
  align-self: flex-end;
`

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ItemCount = styled.span`
  // align-self: flex-start;
  position: absolute;
  font-size: 10px;
  font-weight: 500;
  bottom: -2px;
`

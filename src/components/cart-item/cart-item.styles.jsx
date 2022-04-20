import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 40%;
  }
`

export const CloseSymbol = styled.span`
  width: 15%;
  align-self: center;
  cursor: pointer;
`

export const ItemDetails = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
  padding: 1em;
`

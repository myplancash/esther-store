import styled from 'styled-components';

export const CheckoutItemsContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`
export const ImageContainer = styled.div`
  width: 20%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Items = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
`

export const Quantity = styled.span`
  display: flex;
  width: 20%;
  div {
    cursor: pointer;
  }
  span {
    margin: 0 10px;
  }
`

export const Name = styled.span`
  width: 20%;
  padding-left: 1em;
`

export const Price = styled.span`
  width: 20%;
`

export const RemoveButton = styled.span`
  cursor: pointer;
  padding-left: 12px;
`


/* .checkout-items-container {
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .items {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;

  }

  .image-container {
    width: 20%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .quantity {
    display: flex;
    .arrow {
      cursor: pointer;
    }
    div {
      margin: 0 10px;
    }
    .value {
      margin: 0 10px;
    }
  }

  .name,
  .quantity,
  .price {
    width: 25%;
  }

  .name {
    padding-left: 1em;
  }

  .remove-button {
    // padding-left: 12px;
    cursor: pointer;
  }
} */
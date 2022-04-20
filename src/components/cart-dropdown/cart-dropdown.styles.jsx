import styled from 'styled-components';
// import Button from '../button/button.component';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

const subColor = '#717171';

export const CartDropdownContainer = styled.div`
  position: absolute;
  height: 340px;
  width: 240px;
  top: 90px;
  right: 40px;
  display: flex;
  // gap: 10px 20px;
  flex-direction: column;
  z-index: 5;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  align-content: flex-start;
  justify-content: flex-start;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
    font-size: 12px;
  }
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`
export const EmptyMessage = styled.p`
  font-size: 18px;
  margin: 50px auto;
  color: ${subColor};
`

/* export const CartDropdownButton = styled(Button)`
  margin-top: auto;
  font-size: 12px;
`
 */
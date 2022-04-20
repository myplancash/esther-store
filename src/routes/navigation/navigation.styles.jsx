import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
  height: 90%;
  width: 70px;
  padding: 25px;
  font-weight: ;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  align-self: flex-end;
  color: ${props => props.linkcolor || '#282629'};
  &:hover  {
    color: #241C15;
  }

`
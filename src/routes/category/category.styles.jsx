import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 20px;
  align-content: center;
  justify-content: center;
`

export const CategoryTitle = styled.h2`
  font-size: 28px;
  text-align: center;
  margin: 1em auto;
  padding: 10px;
`
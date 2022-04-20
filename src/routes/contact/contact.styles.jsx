import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;
  min-height: 90vh;
`

export const ContactHeader = styled.div`
  width: 50%;
  padding: 2em;
  position: relative;
  align-self: flex-start;
  text-align: left;

  h2 {
    font-size: 2rem;
    padding-right: 22px;
    font-weight: 500;
  }

  h3 {
    font-size: 1rem;
    font-weight: 200;
  }

  p {
    font-size: 12px;
  }
`
export const ImageContainer = styled.div`
  width: 50%;
  padding: 2em;


  img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 5px;
  }
`
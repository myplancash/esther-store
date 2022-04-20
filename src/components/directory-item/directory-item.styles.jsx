import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`}

  /* flex-grow: 0;
  elements dont grow:
  flex-shrink: 0;
  elements dont shrink in a flexible way:
  flex-basis: auto;
  the width of the elements will be set by proportions in width due to flex-basis not support workaround:
  width: calc(33.33% - 60px);
  flex: 1 100%; */
`

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    font-family: 'Sora',
    sans-serif;
    font-weight: 500;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`

export const DirectoryItemContainer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  min-width: 20%;
  height: 240px;
  display: flex;
  flex-grow: 2;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`
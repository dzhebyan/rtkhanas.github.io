import styled from 'styled-components';

export default styled.div`
  background-size: cover;
  @media screen and (max-width: 900px) {
    background-image: url('/bg90.svg');
    background-position: top center;
    width: 100vw;
  }
  @media screen and (min-width: 901px) {
    align-items: center;
    background-image: url('/bg.svg');
    background-position: left;
    display: flex;
    justify-content: center;
    width: 60vw;
    height: 100vh;
  }
`;

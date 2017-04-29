import styled from 'styled-components';

export default styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
    min-height: 50vh;
    width: 100vw;
  }
  @media screen and (min-width: 901px) {
    width: 40vw;
    height: 100vh;
  }
`;

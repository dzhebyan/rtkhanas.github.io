import styled from 'styled-components';

export default styled.div `
  background: linear-gradient(to right, #008BCD 0, #11FFE0 60%);
  display: flex;
  height: 100vh;
  width: 100vw;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media screen and (min-width: 901px) {
    flex-direction: row;
  }
`;

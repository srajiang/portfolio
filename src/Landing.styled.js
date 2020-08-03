import styled from 'styled-components';

export const Main = styled.main`
  width: 70vw;
  margin: 0 auto;
`;

export const Body = styled.div`
  height: 100vh;
  background-color: ${({theme}) => theme.background_primary};
`;
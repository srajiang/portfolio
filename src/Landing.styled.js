import styled from 'styled-components';
import { mediaQuery } from './theme';

export const Main = styled.main`
  width: 70vw;
  min-width: 360px;
  margin: 0 auto;

  ${mediaQuery.desktop_sm`
    width: 75vw;
  `}
`;

export const Body = styled.div`
  height: 100vh;
  background-color: ${({theme}) => theme.background_primary};
`;

export const Section = styled.section`
  padding-top: 10vh;
  padding-bottom: 15vh;
  padding-left: 10vw;

  ${mediaQuery.desktop_sm`
    padding-left: 0;
  `}
`;

export const SectionWide = styled(Section)`
  padding-left: 5vw;
`;

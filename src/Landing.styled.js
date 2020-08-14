import styled from 'styled-components';
import { Title } from './Project.styled';
import { font, mediaQuery } from './theme';

export const Main = styled.main`
  width: 60vw;
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
  padding-left: 5vw;

  ${mediaQuery.desktop_sm`
    padding-left: 0;
  `}
`;

export const SectionWide = styled(Section)`
  padding-left: 0;
`;

export const SectionTitle = styled(Title)`
  font-size: ${font.size.header_med};
`;

export const SectionAccent = styled.span`
  text-align: center;
  font-family: ${font.family.accent};
  font-size: calc( 1.2 * ${font.size.accent});
  color: ${({theme}) => theme.text_accent}; 
  margin-top: 10px;
`;

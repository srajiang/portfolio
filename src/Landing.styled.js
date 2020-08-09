import styled from 'styled-components';
import { Title } from './Project.styled';
import { font } from './theme';

export const Main = styled.main`
  width: 70vw;
  margin: 0 auto;
`;

export const Body = styled.div`
  height: 100vh;
  background-color: ${({theme}) => theme.background_primary};
`;

export const Section = styled.section`
  padding-top: 10vh;
  padding-bottom: 15vh;
`;

export const SectionTitle = styled(Title)`
  font-size: ${font.size.header_med};
`;

export const SectionAccent = styled.p`
  text-align: center;
  font-family: ${font.family.accent};
  font-size: ${font.size.accent};
  color: ${({theme}) => theme.text_accent}; 
  margin-top: 10px;
`;

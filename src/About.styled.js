import styled from 'styled-components';
import {font} from './theme';
import { L } from './Base.styled';

export const Bio = styled.section`
  display: flex;
  flex: 2 1;
`;

export const Link = styled(L)`
  position: relative;
  font-family: ${font.family.body};
  color: ${({theme}) => theme.text_accent };
`;

export const Photo = styled.img`

`;

export const List = styled.ul`

`;
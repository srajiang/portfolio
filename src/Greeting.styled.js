import styled from 'styled-components';
import { font, mediaQuery } from './theme';
import { B } from './Base.styled';

export const Greeting = styled.div`
  padding-left: 5vw;

  ${mediaQuery.desktop_sm`
    padding-left: 0;
  `}
`;

export const Accent = styled.h3`
  font-size: ${font.size.text_header_sm};
  font-family: ${font.family.accent};
  color: ${({theme}) => theme.text_accent};
  font-weight: ${font.weight.light};
  padding-top: 10vh;
  padding-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: ${font.size.header};
  font-weight: ${font.weight.bold};
  font-family: ${font.family.header};
  color: ${({theme}) => theme.text_header_lg};
  padding-bottom: 1rem;


  ${ mediaQuery.desktop_lg`
    font-size: calc(.8 * ${ font.size.header });
  `}
  
`;

export const SubTitle = styled(Title)`
  color: ${({ theme }) => theme.text_header_lg_sub};
  display: flex;
  flex-wrap: wrap;

  & .th {
    font-weight: ${font.weight.light};
  }

`;

export const Body = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
  line-height: 1.65rem;
  max-width: 500px;
  font-size: ${font.size.header_sm};
  font-weight: ${font.weight.light};
  font-family: ${font.family.body};
  color: ${({theme}) => theme.text_header_lg_sub};
`;

export const Button = styled(B)`
  padding-top: 15px;
  padding-left: 25px;
  padding-bottom: 15px;
  padding-right: 25px;
`;


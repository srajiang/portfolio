import styled from "styled-components";
import { font, 
         mediaQuery 
      } from './theme';


export const Grid = styled.div`

  margin-top: 65px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;   
  grid-template-rows: 300px 300px 300px;  
  column-gap: 15px;
  row-gap: 15px;

  ${mediaQuery.desktop_lg`
    grid-template-columns: 1fr 1fr;  
    grid-template-rows: 350px 350px 350px;    
  `}

  ${mediaQuery.desktop_sm`
    grid-template-columns: 1fr;     
    grid-template-rows: 350px 350px 350px;    
    min-width: 300px;
  `}

`;

export const Card = styled.div`
  border-radius: 3px;
  background-color: ${({theme}) => theme.background_secondary};
  padding: 1.65rem;

  position: relative;
  box-shadow: ${({theme}) => theme.box_shadow} 0px 10px 30px -15px;

  transition: all 250ms ease-out;

  &:hover {
    transform: translateY(-1.5%);
  }

`;

export const Title = styled.h2`
  text-align: center;

  font-size: ${font.size.header_sm};
  font-family: ${font.family.header}, sans-serif;
  font-weight: ${font.weight.bold};
  color: ${({theme}) => theme.text_header_sm};
`;

export const CardTitle = styled(Title)`
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  color: ${({theme}) => theme.text};
  font-weight: ${font.weight.regular};
  font-family: ${font.family.body}, sans-serif;
  line-height: 1.5;
`;

export const DescMeta = styled.p`
  box-sizing: border-box;
  
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 30px;

  .tag { 
    margin-top: .5rem;
    margin-right: .75rem;
  }

  color: ${({theme}) => theme.text};
  font-size: ${font.size.accent};
  font-family: ${font.family.accent}, sans-serif;
`;

export const Link = styled.div`

  text-align: right;
  padding-bottom: 5%;
  font-size: calc(${font.size.header_sm} * 1);
  color: ${({theme}) => theme.text};

  & > .i {
    margin-left: 1rem;
  }
`;


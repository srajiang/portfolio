import styled from "styled-components";
import {
  font,
  transition,
} from "./theme";

// default link with hover
export const L = styled.a`
  color: ${({theme}) => theme.text};
  font-family: ${font.family.accent};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    transition: ${transition.cubic};
    color: ${({theme}) => theme.text_accent};
  }

  &:visited {
    text-decoration: none;
  }
`;

// default button
export const B = styled.a`

   &:visited {
    text-decoration: none;
  }

  border: 1px solid ${({theme}) => theme.text_accent};
  color: ${({theme}) => theme.text_accent};
  background-color: transparent;
  font-family: ${font.family.accent};

  border-radius: 2px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;

  transition: ${transition.cubic};

  &:hover {
    transition: ${transition.cubic};
    cursor: pointer;
    background-color: ${({theme}) => theme.text_accent};
    background: rgba(255, 115, 123, .2);
  }
`;

// default main body 
export const Body = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
  line-height: 1.65rem;
  max-width: 500px;
  font-size: ${font.size.header_sm};
  font-weight: ${font.weight.light};
  font-family: ${font.family.body};
  color: ${({ theme }) => theme.text_header_lg_sub};
`;

// default title
export const T = styled.h2`
  font-size: ${font.size.header_med};
  font-family: ${font.family.header}, sans-serif;
  font-weight: ${font.weight.bold};
  color: ${({ theme }) => theme.text_header_sm};
`;

// default title accent
export const TAccent = styled.span`
  text-align: center;
  font-family: ${font.family.accent};
  font-size: calc( 1.2 * ${font.size.accent});
  color: ${({ theme }) => theme.text_accent}; 
  margin-top: 10px;
`;
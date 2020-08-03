import styled from "styled-components";
import {
  colors_dark,
  font,
  transition,
} from "./theme";

// default link with hover
export const L = styled.a`
  color: ${colors_dark.text};
  font-family: ${font.family.accent};

  &:hover {
    cursor: pointer;
    transition: ${transition.cubic};
    color: ${colors_dark.text_accent};
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

  border: 1px solid ${colors_dark.text_accent};
  color: ${colors_dark.text_accent};
  background-color: transparent;
  font-family: ${font.family.accent};

  border-radius: 2px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;

  &:hover {
    transition: ${transition.cubic};
    cursor: pointer;
    background-color: ${colors_dark.text_accent};
    background: rgba(255, 115, 123, .2);
  }
`;
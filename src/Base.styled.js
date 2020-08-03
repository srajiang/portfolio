import styled from "styled-components";
import {
  colors_dark,
  transition,
} from "./theme";

// default link with hover
export const L = styled.a`
  color: ${colors_dark.text};

  &:hover {
    cursor: pointer;
    transition: ${transition.cubic};
    color: ${colors_dark.text_accent};
  }

  &:visited {
    text-decoration: none;
  }
`;


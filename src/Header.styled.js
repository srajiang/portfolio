import styled from 'styled-components';

import { colors_dark, transition, font } from "./theme";


export const NavBar = styled.div`
  width: 100vw;
  height: 70px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavLink = styled.div`

  padding-right: 25px;
  text-align: right;
  font-size: ${font.size.accent};

  & .anchor{
    padding-right: 1.5rem;
  }

  .anchor > span {
    color: ${colors_dark.text_accent};
  }
`;



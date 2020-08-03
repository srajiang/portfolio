import styled from 'styled-components';

import { colors_dark, transition, font } from "./theme";


const Bar = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
    align-items: center;

  color: ${colors_dark.text};
  font-family: ${font.family.accent};
  font-size: ${font.size.accent};
`;

export const FooterBar = styled(Bar)`
  flex-direction: column;
  justify-content: center;

  & p {
    padding-bottom: 5px;
  }
`;

export const NavBar = styled(Bar)`
  justify-content: flex-end;
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



import styled from 'styled-components';

import { font, mediaQuery } from "./theme";

const Bar = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
    align-items: center;

  color: ${({theme}) => theme.text};
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

  ${mediaQuery.desktop_sm`
    display: none;
  `} 

`;

export const NavHamburgerMenu = styled(Bar)`
  cursor: pointer;
  display: none; 

  ${mediaQuery.desktop_sm`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  `} 

  .hamburger-box {
    position: relative;
    margin-right: 35px;
    height: 8px;
    width: 24px;
  }

`;

export const Menu = styled.div`
    border-radius: 2px;
    height: 1.5px;
    width: 35px;
    top: 50%;
    background-color: ${({theme}) => theme.text_accent};

    position: absolute;

`;

export const NavLink = styled.div`

  padding-right: 25px;
  text-align: right;
  font-size: ${font.size.accent};

  & .anchor{
    padding-right: 1.5rem;
  }

  .anchor > span {
    color: ${({theme}) => theme.text_accent};
  }
`;


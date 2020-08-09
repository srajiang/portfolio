import styled, { css, keyframes } from 'styled-components';

import { font, mediaQuery } from "./theme";

/* kf animations for navbar scroll */
const slideDown = keyframes`
    from {
      top: -100px;
    }
    to {
      top: 0px;
    }
`; 

const activate = keyframes`
  from {
      top: 0px;
  }
  to {
    top: -5px;
  }
`;

const slideUp = keyframes`
  from {
    top: initial;
  }
  to {
    top: -100px;
  }
`;


const Bar = styled.div`
  width: 100vw;
  height: 70px;
  margin-top: 20px;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.text};
  font-family: ${font.family.accent};
  font-size: ${font.size.accent};
  transition: all 0.2s ease-in;

  ${({ YOffset, theme }) => {
    if (YOffset === 0) {
      return css`
      `;
    } else if (YOffset > 0 && YOffset < 100) {
      return css`
        animation: ${activate} 0.3s ease-in 1;
        animation-fill-mode: forwards;
        box-shadow: ${theme.box_shadow} 0px 10px 30px -10px;
        position: -webkit-sticky;
        position: sticky;
      `;
    } else if (YOffset > 99) {
      return css`
        animation: ${slideUp} 0.3s ease-in 1;
        animation-fill-mode: forwards;
      `;
    }
  }};
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


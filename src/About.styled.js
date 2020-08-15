import styled from 'styled-components';
import {font, mediaQuery} from './theme';
import { L } from './Base.styled';


export const Bio = styled.section`
  padding-top: 5vh;
  display: flex;
  align-items: center;
  flex: 2 1;

  ${mediaQuery.desktop_lg`
    flex-direction: column;
  `}
  
`;

export const Link = styled(L)`
  position: relative;
  display: inline-block;
  font-family: ${font.family.body};
  color: ${({theme}) => theme.text_accent };

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${({theme}) => theme.text_accent};
    visibiity: hidden;
    transform: scaleX(0);
    transition: all .25s ease-in-out 0s;
  }

  &:hover::after {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const PhotoContainer = styled.div`
  margin-left: 75px;
  margin-bottom: 35px;

   ${mediaQuery.desktop_lg`
    margin-left: 0px;
    margin-top: 30px;
  `}
  position: relative;

  /* hover-off transitions */
  & #photo, #overlay, #underline {
    webkit-transition: all .15s ease-in;
    transition: all .15s ease-in;
    transform: translate(-1px, -1px);
  }

  & #underline{
    opacity: 100%;
    transform: translate(2px, 2px);
  }

  /* hover-on transitions */
  &:hover {
    #photo, #overlay, #underline {
      transition: all .15s ease-out;
      webkit-transition: all .15s ease-out;
      transform: translate(1px, 1px);
    }

    #overlay {
      opacity: 0%;
    }

    #underline{
      opacity: 100%;
      transform: translate(-2px, -2px);
    }
  }
`;

export const PhotoOverlay = styled.div`
  border-radius: 4px;
  width: 300px;
  height: 300px;

  background: ${({theme}) => theme.text_accent};
  opacity: 25%;
  position: absolute;
  top: 0;
  left: 0;

  
`;

export const PhotoUnderLine = styled(PhotoOverlay)`
  background: transparent;
  color: ${({theme}) => theme.text_accent};
  border: 1px solid ${({theme}) => theme.text_accent};
  top: 20px;
  left: 20px;
  opacity: 100%;
  z-index: -1;

  &:hover {
    opacity: 100%;
    transition: all .25s ease-in;
    transform: translate(-5px, -5px);
  }
`;

export const Photo = styled.img`
  border-radius: 4px;
  width: 300px;
  height: 300px;
`;

export const List = styled.ul`
  padding-top: 10px;

  font-family: ${font.family.accent};
  font-size: ${font.size.accent};
  display: grid;
  list-style-type: none;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 25px;

  & li::before {
    content: "▹";
    height: 10px;
    width: 10px;
    padding-right: 10px;
    color: ${({theme}) => theme.text_accent};
  }
`;
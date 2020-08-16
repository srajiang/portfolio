import styled, { css } from 'styled-components';
import { Card, Link, DescMeta } from './Project.styled';
import { T } from './Base.styled';
import { font } from './theme';

export const FeatureIndexContainer = styled.div`
  padding-top: 2vh;
  padding-bottom: 15vh;
`;

export const Container = styled.div`
  margin-top: 50px;
  position: relative;
  max-width: 1100px;

  & > #image-wrap {
    z-index: -1;
    position: absolute;
    right: 0px;
    top: 0px;
  }
`;

export const Accent = styled.h3`
  font-size: calc(.45 * ${ font.size.header_med});
  color: ${({theme}) => theme.text_accent};
  font-family: ${font.family.accent};
  padding-bottom: 10px;
`;

export const Title = styled(T)`
  font-size: calc(.75 * ${ font.size.header_med});
  padding-bottom: 20px;
`;

export const Description = styled.div`
`;

export const DescriptionMeta = styled(DescMeta)`
  position: inherit;
  padding-top: 20px;
`;

export const ImageContainer = styled.div`
  position: relative;

  /* hover-off transitions */
  & > #photo, #overlay, #underline {
    webkit-transition: all .15s ease-in .075s;
    transition: all .15s ease-in .075s;
    transform: translate(-1px, -1px);
  }

  & #underline{
    opacity: 100%;
    transform: translate(2px, 2px);
  }

  /* hover-on transitions */
  &:hover {
    #photo, #overlay, #underline {
      transition: all .15s ease-out .075s;
      webkit-transition: all .15s ease-out .075s;
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

export const ImageOverlay = styled.div`

  position: absolute;
  top: 0;
  left: 0;

  border-radius: 4px;
  background: ${({ theme }) => theme.text_accent};
  opacity: 25%;

`;

export const ImageUnderline = styled(ImageOverlay)`

  background: transparent;
  color: ${({ theme }) => theme.text_accent};
  border: 1px solid ${({ theme }) => theme.text_accent};
  top: 20px;
  opacity: 100%;
  z-index: -1;

  ${ ({align}) => {

    if (align === 'right') {
      return css`
        right: 20px;
      `;
    } else {
      return css`
        left: 20px;
      `;
    }

  } }

  &:hover {
    opacity: 100%;
    transition: all .25s ease-in;
    transform: translate(-5px, -5px);
  }
`;

export const Image = styled.img`

  border-radius: 4px;
  height: 300px;
  width: 600px;
`;

export const FeatureCard = styled(Card)`
  margin-top: .5rem;
  font-family: ${font.family.body};
  font-size: ${font.size.body};
  color: ${({theme})=> theme.text};
  font-weight: ${font.weight.light};
  line-height: 1.65;
  width: 50%;
  max-width: 500px;
  min-width: 300px;
`;

export const FeatureLink = styled(Link)`
  text-align: left;
  padding-top: 20px;
  padding-left: 0px;

  & > .i {
    margin-left: 0rem;
    margin-right: 1rem;
  }
`;
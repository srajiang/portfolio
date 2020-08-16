import styled from 'styled-components';
import { Card, Link, DescMeta } from './Project.styled';
import { T } from './Base.styled';
import { font } from './theme';


export const Container = styled.div`
  margin-top: 50px;
  position: relative;
  height: 400px;
  max-width: 1100px;
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

export const Image = styled.img`

  z-index: -1;

  border-radius: 4px;
  position: absolute;
  height: 300px;
  width: 600px;
  right: 0px;
  top: 0px;
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
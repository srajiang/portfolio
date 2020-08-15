import styled from 'styled-components';
import { Card } from './Project.styled';

export const FeatureIndex = styled.div`
  position: relative;
`;

export const Description = styled.div`
`;

export const Panel = styled.div`
  z-index: 2;
  background-color: ${({theme}) => theme.background_secondary};
`;

export const Image = styled.img`
  width: 600px;
  height: 100%;
`;

export const FeatureCard = styled(Card)`
`;

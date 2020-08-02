import styled from "styled-components";
import { colors_dark, colors_light, font } from './theme';

// dark is default mode
const colors = colors_dark;

// TODO: responsive logic needed
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 400px 400px 400px; 
  grid-template-rows: 300px 300px 300px;
  column-gap: 12px;
  row-gap: 12px;
`;

export const Card = styled.div`
  border-radius: 4px;
  background-color: ${colors.background_secondary};
  padding: 1.5rem;

  position: relative;
`;

export const Title = styled.h2`
  text-align: center;

  font-size: ${font.size.header_sm};
  font-family: ${font.family.header}, sans-serif;
  font-weight: ${font.weight.bold};
  color: ${colors.text_header_sm};
`;

export const CardTitle = styled(Title)`
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Desc = styled.p`

  color: ${colors.text};
  font-weight: ${font.weight.regular};
  font-family: ${font.family.body}, sans-serif;
  line-height: 1.5;
`;

export const DescMeta = styled.p`
  box-sizing: border-box;
  
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 30px;

  .tag { 
    margin-top: .5rem;
    margin-left: .5rem;
    margin-right: .5rem;
  }

  color: ${colors.text};
  font-size: ${font.size.accent};
  font-family: ${font.family.accent}, sans-serif;
`;

export const Link = styled.a`
`;

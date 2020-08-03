import React from 'react';
import { FooterBar } from './Margin.styled';
import { L } from './Base.styled';

const Footer = () => {

  return (
    <FooterBar>
      <p>
        Built by Sarah Jiang
      </p>
      <p>
        Design + Inspiration <L href="https://brittanychiang.com/">here</L>.
      </p>
    </FooterBar>
  );
}

export default Footer;
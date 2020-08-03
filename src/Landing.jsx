import React from 'react';
import ProjectIndex from './ProjectIndex';
import { Body, Main } from './Landing.styled';
import { ExternalLink as VertLink } from './ExternalLink';

/* icon import  */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faExternalLinkAlt);


const Landing = () => {

  return (
    <Body>
      <VertLink />
      <Main>
        {/* + navigation bar */}
        {/* + intro section */}
        {/* + about me section */}
        {/* + featured project section */}
        <ProjectIndex />
        {/* + footer */}
      </Main>
    </Body>
  );  
}

export default Landing;



import React from 'react';
import ProjectIndex from './ProjectIndex';

import { Body, Main } from './Landing.styled';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faExternalLinkAlt);

const Landing = () => {

  return (
    <Body>
      <Main>
        <ProjectIndex />
      </Main>
    </Body>
  );  
}

export default Landing;



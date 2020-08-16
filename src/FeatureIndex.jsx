import React from 'react';
import Feature from './Feature';

import { FeatureIndexContainer } from './Feature.styled';

const FeatureIndex = ({projects}) => {

    return (
      <FeatureIndexContainer>
      {
        projects.map((project) => ( 
          project.fields.visibility === "Featured"
          && <Feature key={project.id} project={project.fields}/>
        ))
      }
      </FeatureIndexContainer>
    )
}

export default FeatureIndex;
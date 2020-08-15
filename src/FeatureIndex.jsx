import React from 'react';
import Feature from './Feature';

const FeatureIndex = ({projects}) => {

    return (
      <>
      {
        projects.map((project) => ( 
          project.fields.visibility === "Featured"
          && <Feature key={project.id} project={project.fields}/>
        ))
      }
      </>
    )
}

export default FeatureIndex;
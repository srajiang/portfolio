import React from 'react';

import { FeatureIndex, Image, Panel, Description } from './Feature.styled';

const Feature = ({project}) => {
  console.log(project);
  return (
    <>
      <FeatureIndex>
        <Description>
          <h3>Featured Project</h3>
          <h2>{project.title}</h2>
          <Panel>Placeholder text here</Panel>
        </Description>
        <Image src={project.url_image[0].url} />
      </FeatureIndex>
    </>
  )
}

export default Feature;
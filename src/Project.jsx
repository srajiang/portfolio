import React from 'react';
import { Card, Title, Desc, DescMeta } from "./Project.styled";

const Project = (fields) => {

  const { 
    title, 
    desc_short,
    url_repo,
    url_live,
    url_image,
    stack,
   } = fields.record;
  
   console.log(fields);
  
   return (
    <>
      <Card>
        <Title>{title}</Title>
        <Desc>{desc_short}</Desc>
        <DescMeta>{stack}</DescMeta>
      </Card>
    </>
  );
}

export default Project;
import React from 'react';
import { Card, CardTitle, Desc, DescMeta } from "./Project.styled";

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
        {/* add project links and icon */}
        <CardTitle>{title}</CardTitle>
        <Desc>{desc_short}</Desc>
        <DescMeta>
          { stack.map( (ele, idx) => <span className="tag" key={idx}>{ele}</span>)}
        </DescMeta>
     
      </Card>
    </>
  );
}

export default Project;
import React from 'react';
import { Card, CardTitle, Desc, DescMeta, Link } from "./Project.styled";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";

const Project = (fields) => {

  const { 
    title, 
    desc_short,
    // url_repo,
    // url_live,
    // url_image,
    stack,
   } = fields.record;
  
   console.log(fields);
  
   return (
    <>
      <Card>
        <Link>
          <FA className ="i" icon={["fab", "github"]}/>
          <FA className ="i" icon={["fas", "external-link-alt"]}/>
        </Link>
        <CardTitle>{title}</CardTitle>
        <Desc>{desc_short}</Desc>
        <DescMeta>
          { stack && stack.map( (ele, idx) => <span className="tag" key={idx}>{ele}</span>)}
        </DescMeta>
     
      </Card>
    </>
  );
}

export default Project;
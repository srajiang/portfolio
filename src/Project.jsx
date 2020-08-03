import React from 'react';
import { Card, CardTitle, Desc, DescMeta, Link } from "./Project.styled";
import { L } from './Base.styled';
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";

const Project = fields => {

  const { 
    title, 
    desc_short,
    url_repo,
    url_live,
    // url_image,
    stack,
   } = fields.record;
  
   return (
     <>
       <Card>
         <Link>
           {url_repo && (
             <L className="i" href={url_repo}>
               <FA icon={["fab", "github"]} />
             </L>
           )}
           {url_live && (
             <L className="i" href={url_live}>
               <FA icon={["fas", "external-link-alt"]} />
             </L>
           )}
         </Link>
         <CardTitle>{title}</CardTitle>
         <Desc>{desc_short}</Desc>
         <DescMeta>
           {stack &&
             stack.map((ele, idx) => (
               <span className="tag" key={idx}>
                 {ele}
               </span>
             ))}
         </DescMeta>
       </Card>
     </>
   );
}

export default Project;
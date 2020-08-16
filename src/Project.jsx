import React from 'react';
import { AnimatedCard, CardTitle, Desc, DescMeta, Link } from "./Project.styled";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { L } from './Base.styled';


const Project = fields => {

  const { 
    title, 
    desc_short,
    url_repo,
    url_live,
    stack,
   } = fields.record;
  
   return (
     <>
       <AnimatedCard>
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
       </AnimatedCard>
     </>
   );
}

export default Project;
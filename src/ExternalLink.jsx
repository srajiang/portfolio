import React from 'react';
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";

import { VertLink, VertL } from './ExternalLink.styled';

export const ExternalLink = ({externalLinks}) => {

  let links = Object.values(externalLinks);

  return (
    <VertLink>
      {externalLinks &&
        links.map((link, idx) => (
         
            <VertL target="_blank" key={idx} href={link.url}>
              <FA icon={link.fontTag} />
            </VertL>
        ))}
    </VertLink>
  );

}

import React from 'react';
import ProjectIndex from './ProjectIndex';
import { Body, Main } from './Landing.styled';
import { ExternalLink as VertLink } from './ExternalLink';
import Header from './Header'; 
import Footer from './Footer';

/* icon import  */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faAdjust } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(fab, faExternalLinkAlt, faEnvelope, faAdjust);

/* external links */
export const externalLinks = {
  git: { url: "https://github.com/srajiang", fontTag: ["fab", "github"]},
  li: { url: "https://www.linkedin.com/in/sjiang8/", fontTag: ["fab", "linkedin"]},
  insta: { url: "https://www.instagram.com/wonderwounded/", fontTag: ["fab", "instagram"]},
  twitter: { url: "https://twitter.com/SarahJiang14", fontTag: ["fab", "twitter"]},
  email: { url: "srajiang@gmail.com", fontTag: ["far", "envelope"]}
};


const Landing = () => {

  return (
    <Body>
      <VertLink externalLinks={externalLinks} />
      <Header />
      <Main>
        {/* + intro section */}
        {/* + about me section */}
        {/* + featured project section */}
        <ProjectIndex />
      </Main>
      <Footer />
    </Body>
  );  
}

export default Landing;



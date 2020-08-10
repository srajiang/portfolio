import React from 'react';
import ProjectIndex from './ProjectIndex';
import { Body, Main, Section as S} from './Landing.styled';
import { VerticalNav } from './VerticalNav';
import Header from './Header'; 
import Footer from './Footer';
import Greeting from './Greeting';

/* dark light mode */
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';
import { colors_dark, colors_light } from './theme';
import GlobalStyle from "./globalStyles"; // css reset

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

  const [ theme, toggleTheme ] = useDarkMode();
  const currTheme = theme === 'light' ? colors_light : colors_dark ;

  return (
    <ThemeProvider theme={currTheme}>
      <GlobalStyle />
      <Body>
        <VerticalNav externalLinks={externalLinks} />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Main>
          <S>
            <Greeting />
          </S>
          {/* + about me section */}
          {/* + featured project section */}
          <S>
            <ProjectIndex />
          </S>
        </Main>
        <Footer />
      </Body>
    </ThemeProvider>
  );  
}

export default Landing;



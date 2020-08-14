import React, { useEffect, useState } from 'react';
import { fetchBio } from './apiUtil';
import { SectionTitle, SectionAccent } from "./Landing.styled";
import { Bio, Photo, Link } from './About.styled';
import { Body } from './Base.styled'

const About = () => {
  
  const [ bio, setBio ] = useState(null);

  useEffect(() => {
   
    async function fetchData() {
      let bio = await fetchBio();
      console.log(bio[0].fields);
      setBio(bio[0].fields);
    }
    fetchData();
  }, [])
  
  // reads current link display names + urls and formats into an array of objs
  const formatLinks = (displayNames, urls) => {
    let linkList = [];
    for (let i = 0; i < displayNames.length; i++) {
      let link = {};
      link["name"] = displayNames[i];
      link["url"] = urls[i]
      linkList.push(link);
    }
    return linkList;
  }

  // returns links in sentence format
  const formatList = (displayNames, urls) => {

    let links = formatLinks(displayNames, urls);
    
    let formattedLinks = [];
    for (let i = 0; i < links.length; i++) {
      formattedLinks.push(
      <>
        {i === (links.length - 1)
            ? (<>
              {"and "}<Link target="_blank" href={links[i].url}>{links[i].name}</Link>
              </>)
            : (<>
              <Link target="_blank" href={links[i].url}>{links[i].name}</Link>{", "}
              </>)
        }
      </>
      )
    }

    return formattedLinks;
  }

  return (
    <>
      <SectionTitle>
        <SectionAccent>01 / </SectionAccent>
        About Me
      </SectionTitle>
      <Bio>
        {bio !== null &&  
          <Body>
            <p>
              Hi, I'm {bio.name}, a {bio.job_title} based out of {bio.location}. 
            </p>
            <br></br>
            <p>
              I'm an engineer with a background in design. I got
              my start working at places like {formatList(bio.display_name, bio.link)
              }. 
            </p>
            <br></br>
            <p>
            {bio.personal_statement}. Most currently, {bio.activity} at {bio.employer_current}. 
            </p>

        </Body>
        }
        <Photo/>
      </Bio>
    </>
  );
}

export default About;


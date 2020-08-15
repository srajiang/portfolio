import React, { useEffect, useState, Fragment} from 'react';
import { fetchBio } from './apiUtil';

import { Body, TAccent } from './Base.styled';
import { Bio, Photo, PhotoOverlay, PhotoContainer, PhotoUnderLine, Link, List, TitleLeft } from './About.styled';

const About = () => {
  
  const [ bio, setBio ] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let bio = await fetchBio();
      setBio(bio[0].fields);
    }
    fetchData();
  }, [])
  
  // reads current link display names + urls and formats into an array of objs
  const formatLinks = (displayNames, urls) => {
    let linkList = [];
    for (let i = 0; i < displayNames.length; i++) {
      linkList.push({ "name": displayNames[i], "url": urls[i] });
    }
    return linkList;
  }

  // returns links in sentence format
  const formatList = (displayNames, urls) => {
    let links = formatLinks(displayNames, urls);
    let linksInSentenceForm = [];

    for (let i = 0; i < links.length; i++) {
      linksInSentenceForm.push(
      <Fragment key={i}>
        {i === (links.length - 1)
          ? (<>{"and "}<Link target="_blank" href={links[i].url}>{links[i].name}</Link></>)
          : (<><Link target="_blank" href={links[i].url}>{links[i].name}</Link>{", "}</>)
        }
      </Fragment>
      )
    }
    return linksInSentenceForm;
  }

  return (
    <>
      <TitleLeft>
        <TAccent>01 / </TAccent>
        About Me
      </TitleLeft>
      <Bio>
        {
          bio !== null &&  
          <Body>
            <p>Hi, I'm {bio.name}. I'm a {bio.job_title} based out of {bio.location}.</p>
            <br></br>
            <p>I'm an engineer with a background in design. I got my start 
              working at places like {formatList(bio.display_name, bio.link)}. {bio.personal_statement} I am 
              currently {bio.activity} at {
              <Link target="_blank" >{bio.employer_display_name}</Link>
            }.</p>
            <br></br>
            <div>
              Here are some technologies I've been using lately: {
                <List>
                  {bio.stack.map((tech, id) => <li key={id}>{tech}</li>)}
                </List>
              }
            </div>
          </Body>
        }
        {
          bio !== null &&  
          <PhotoContainer>
            <Photo id="photo" src={bio.img[0]["url"]}/>
            <PhotoOverlay id="overlay" />
            <PhotoUnderLine id="underline" />
          </PhotoContainer>
        }
      </Bio>
    </>
  );
}

export default About;


import React, { useEffect, useState } from 'react';
import { fetchBio } from './apiUtil';
import { SectionTitle, SectionAccent } from "./Landing.styled";
import { Bio, Description, Photo } from './About.styled';

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
  
  const listItems = (arr) => {
    let stringList = "";
    for (let i = 0 ; i < arr.length -1 ; i++) {
      stringList = stringList.concat(arr[i],", ");
    }
    return stringList.concat(" and ", arr[arr.length -1]);
  }

  return (
    <>
      <SectionTitle>
        <SectionAccent>01 / </SectionAccent>
        About Me
      </SectionTitle>
      <Bio>
        {bio !== null &&  
          <Description>
            <p>
              Hi, I'm {bio.name}, a {bio.job_title} based out of {bio.location}. 
            </p>
            <p>
              I'm an engineer with a background in design. I got
              my start working at places like {listItems(bio.employer_past)}. 
            </p>
            <p>
             Currently {bio.activity} at {bio.employer_current}. 
            </p>
          </Description>
        }
        <Photo/>
      </Bio>
    </>
  );
}

export default About;


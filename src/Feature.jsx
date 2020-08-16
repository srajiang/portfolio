import React from 'react';
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";

import { 
  Container, 
  Image, 
  ImageContainer,
  ImageOverlay,
  ImageUnderline,
  FeatureCard, 
  FeatureLink, 
  Description,
  DescriptionMeta, 
  Title, 
  Accent } from './Feature.styled';
import { L } from './Base.styled';

const Feature = ({project}) => {

  const {
    title,
    desc_long,
    url_repo,
    url_live,
    url_image,
    stack
  } = project;

  return (
      <Container>
        <Description>
          <Accent>Featured Project</Accent>
          <Title>{title}</Title>
          <FeatureCard>{desc_long}</FeatureCard>
          <DescriptionMeta>
            {stack &&
              stack.map((ele, idx) => (
                <span className="tag" key={idx}>
                  {ele}
                </span>
              ))}
          </DescriptionMeta>
          <FeatureLink>
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
          </FeatureLink>
        </Description>
      <div id="image-wrap">
        <ImageContainer >
          
              <Image id="photo" src={url_image[0].url} />
              <ImageOverlay id="overlay"/>
              <ImageUnderline id="underline"/>
            
        </ImageContainer >
      </div>
      </Container>
  )
}

export default Feature;
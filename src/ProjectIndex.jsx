import React, { useState, useEffect } from 'react';
import { fetchProjects } from './apiUtil';
import Project from './Project';
import FeatureIndex from './FeatureIndex';
import { Grid } from './Project.styled';
import { TitleLeft, SectionAccent } from './Landing.styled';

const ProjectIndex = () =>  {

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    async function getProjects() {
      let projects = await fetchProjects();
      setProjects(projects);
    }
    getProjects();
  }, []);

  if (!projects) return null;
  return (
    <>
      <TitleLeft>
        <SectionAccent>02.1 / </SectionAccent>
        Featured Projects
      </TitleLeft>

      <FeatureIndex />

      <TitleLeft>
        <SectionAccent>02.2 / </SectionAccent>
        More Projects
      </TitleLeft>

      <Grid>
        {projects.map((record) => (
          <Project key={record.id} record={record.fields} />
        ))}
      </Grid>
    </>
  );  
}


export default ProjectIndex;
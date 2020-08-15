import React, { useState, useEffect } from 'react';
import { fetchProjects } from './apiUtil';
import Project from './Project';
import FeatureIndex from './FeatureIndex';
import { Grid, TitleCenter } from './Project.styled';
import { TAccent } from './Base.styled';

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
      <TitleCenter>
        <TAccent>02.1 / </TAccent>
        Featured Projects
      </TitleCenter>

      <FeatureIndex />

      <TitleCenter>
        <TAccent>02.2 / </TAccent>
        More Projects
      </TitleCenter>

      <Grid>
        {projects.map((record) => (
          <Project key={record.id} record={record.fields} />
        ))}
      </Grid>
    </>
  );  
}


export default ProjectIndex;
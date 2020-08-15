import React from 'react';
import { fetchProjects } from './apiUtil';
import Project from './Project';
import FeatureIndex from './FeatureIndex';
import { Grid } from './Project.styled';
import { SectionTitle, SectionAccent } from './Landing.styled';

class ProjectIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  async componentDidMount() {
    let projects = await fetchProjects();
    this.setState({ data: projects });
  }

  render() {
    let [data] = [this.state.data];
    if (!data) return null;
    return (
      <>
        <SectionTitle>
          <SectionAccent>02.1 / </SectionAccent>
          Featured Projects
        </SectionTitle>

        <FeatureIndex>

        </FeatureIndex>


        <SectionTitle>
          <SectionAccent>02.2 / </SectionAccent>
          More Projects
        </SectionTitle>

        <Grid>
          {data.map((record) => (
            <Project key={record.id} record={record.fields} />
          ))}
        </Grid>
      </>
    );  
  }
}

export default ProjectIndex;
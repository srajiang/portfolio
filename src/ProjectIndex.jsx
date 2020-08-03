import React from 'react';
import { fetchProjects } from './apiUtil';
import Project from './Project';
import { Grid, Title } from './Project.styled';

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
        <Title>Projects</Title>
        <Grid>
            { data.map(
              record => <Project key={record.id} record={record.fields}/>
            )}
        </Grid>
      </>
    );  
  }
}

export default ProjectIndex;
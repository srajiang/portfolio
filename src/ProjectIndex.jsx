import React from 'react';
import { fetchProjects } from './apiUtil';

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
    if (!this.state.data) return null;
    return (
      <>
        <h2>I am a component!</h2>
        <ul>
          { this.state.data.map(record => <li key={record.id}>{record.fields.title}</li>) }
        </ul>
      </>
    );  
  }
}

export default ProjectIndex;
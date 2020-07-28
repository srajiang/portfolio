import React from 'react';
import { fetchProjects } from './apiUtil';

class ProjectIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.setState({ data: fetchProjects()});
  }

  render() {
    if (!this.state.data) return null;
    return (
      <>
        <h2>I am a dynamic component!</h2>
        {/* this.state.data.map((record, idx) => <p>{record.title}</p>) */}
      </>
    )  
  }
}

export default ProjectIndex;
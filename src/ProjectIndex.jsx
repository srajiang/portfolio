import React from 'react';
import { getData } from './apiUtil';

class ProjectIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    getData()
      .then((data) => this.setState({ data: data }))
  }

  render() {
    if (this.state.data) {
      let { userId, id, title, completed } = this.state.data.data;
      return (
        <>
          <h2>I am a dynamic component!</h2>
          <h3>User {userId}  |  TodoId: {id}  |  Title: {title}  |  Completed: {completed}</h3>
        </>
      )
    } else {
      return null;
    }
  }
}
export default ProjectIndex;
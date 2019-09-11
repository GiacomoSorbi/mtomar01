import React from 'react';
import './ProjectList.css';
import { Project1 } from '../Project/Project1'

export class ProjectList extends React.Component {
  render() {
    return (
      <div className="ProjectList">
        {
          this.props.projects.map(project => {
            return <Project1 key={project.name} project={project} />
          })
        }
      </div>
    );
  }
}

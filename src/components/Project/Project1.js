import React from 'react';
import './Project1.css';

export class Project1 extends React.Component {
  render() {
    return (
      <div className={"Project " + this.props.project.projectType}>
        <a href={this.props.project.link}>
        <div className="image-container">
          <img src={this.props.project.imageSrc} alt=''/>
        </div>
        <h2>{this.props.project.name}</h2>
        <div className="Project-information">
          <div className="Project-condition">
            <p>{this.props.project.condition}</p>
          </div>
          <div className="Business-reviews">
            <p>{this.props.project.location}</p>
          </div>
        </div>
      </a>
      </div>
    );
  }
}

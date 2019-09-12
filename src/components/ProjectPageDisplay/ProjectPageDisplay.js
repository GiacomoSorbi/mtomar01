import React from 'react';
import './ProjectPageDisplay.css';
import { Link } from 'react-router-dom';

export class ProjectPageDisplay extends React.Component {
  render() {
    return (
      <div id='projecttop'>
        <div className='ProjectComments'>
         <p className="projectStart"><Link to='/home'>{"<"}Go Back</Link></p>
        <div className="projectBackg">
          <p><span className="bold">Title: </span> Dramatic Avant-garde Residence</p>
          <p><span className="bold">Condition: </span> Case Study</p>
          <p><span className="bold">Description: </span> This is a case study on blending dramatic with modern influences.</p>
         </div>
        </div>

        <div className='ProjectPageImages'>
            <img src={require('../../Pages/ProjectPages/ProjectPagesImages/dramaticAvantGarde /1.jpg')} alt='' />

          <img src={require('../../Pages/ProjectPages/ProjectPagesImages/dramaticAvantGarde /2.jpg')} alt='' />

        <img src={require('../../Pages/ProjectPages/ProjectPagesImages/dramaticAvantGarde /3.jpg')} alt='' />

      <img src={require('../../Pages/ProjectPages/ProjectPagesImages/dramaticAvantGarde /4.jpg')} alt='' />

    <img src={require('../../Pages/ProjectPages/ProjectPagesImages/dramaticAvantGarde /5.jpg')} alt='' />

  <img src={require('../../Pages/ProjectPages/ProjectPagesImages/dramaticAvantGarde /6.jpg')} alt='' />

<img src={require('../../Pages/ProjectPages/ProjectPagesImages/dramaticAvantGarde /7.jpg')} alt='' />

          </div>

          <div className="ProjectPageLinks">
          <p><Link to='/home'>{"<"}Go Back</Link></p>
        <p><a href="#projecttop">{"^"}</a></p>
          </div>

        </div>
    );
  }
};

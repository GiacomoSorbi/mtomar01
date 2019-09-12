import React from 'react';
import './ProjectPageDisplay.css';
import { Link } from 'react-router-dom';

export class ProjectPageDisplayWaterparkcafe extends React.Component {
  render() {
    return (
      <div id='projecttop'>
        <div className='ProjectComments'>
         <p className="projectStart"><Link to='/home'>{"<"}Go Back</Link></p>
        <div className="projectBackg">
          <p><span className="bold">Title: </span> Water park Cafe and Venue</p>
        <p><span className="bold">Condition: </span> Completed in 2015</p>
          <p><span className="bold">Description: </span> Design and construction project of a venue that is placed inside the largest water park in Greece.</p>
         </div>
        </div>

        <div className='ProjectPageImages'>
          <img src={require('../../Pages/ProjectPages/ProjectPagesImages/waterPark/0.png')} alt='' />
          <img src={require('../../Pages/ProjectPages/ProjectPagesImages/waterPark/1.jpg')} alt='' />
          <img src={require('../../Pages/ProjectPages/ProjectPagesImages/waterPark/2.jpg')} alt='' />
          <img src={require('../../Pages/ProjectPages/ProjectPagesImages/waterPark/3.JPG')} alt='' />
         <img src={require('../../Pages/ProjectPages/ProjectPagesImages/waterPark/4.JPG')} alt='' />

          </div>

          <div className="ProjectPageLinks">
          <p><Link to='/home'>{"<"}Go Back</Link></p>
        <p><a href="#projecttop">{"^"}</a></p>
          </div>

        </div>
    );
  }
};

import React from 'react';
import './ProjectPageDisplay.css';
import { Link } from 'react-router-dom';

export class ProjectPageDisplayApartmentdesign extends React.Component {
  render() {
    return (
      <div id='projecttop'>
        <div className='ProjectComments'>
         <p className="projectStart"><Link to='/home'>{"<"}Go Back</Link></p>
        <div className="projectBackg">
          <p><span className="bold">Title: </span> Apartment Design</p>
        <p><span className="bold">Condition: </span> Completed in 2015</p>
          <p><span className="bold">Description: </span> Appartment renovation in a semi-classical character with some influences from colonial architecture.</p>
         </div>
        </div>

        <div className='ProjectPageImages'>
          <img src={require('../../Pages/ProjectPages/ProjectPagesImages/appartment/1.jpg')} alt='' />
        <img src={require('../../Pages/ProjectPages/ProjectPagesImages/appartment/2.jpg')} alt='' />
      <img src={require('../../Pages/ProjectPages/ProjectPagesImages/appartment/3.jpg')} alt='' />
    <img src={require('../../Pages/ProjectPages/ProjectPagesImages/appartment/4.jpg')} alt='' />
  <img src={require('../../Pages/ProjectPages/ProjectPagesImages/appartment/5.jpg')} alt='' />
<img src={require('../../Pages/ProjectPages/ProjectPagesImages/appartment/6.jpg')} alt='' />

          </div>

          <div className="ProjectPageLinks">
          <p><Link to='/home'>{"<"}Go Back</Link></p>
        <p><a href="#projecttop">{"^"}</a></p>
          </div>

        </div>
    );
  }
};

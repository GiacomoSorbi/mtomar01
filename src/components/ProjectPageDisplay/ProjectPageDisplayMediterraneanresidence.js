import React from 'react';
import './ProjectPageDisplay.css';
import { Link } from 'react-router-dom';

export class ProjectPageDisplayMediterraneanresidence extends React.Component {
  render() {
    return (
      <div id='projecttop'>
        <div className='ProjectComments'>
         <p className="projectStart"><Link to='/home'>{"<"}Go Back</Link></p>
        <div className="projectBackg">
          <p><span className="bold">Title: </span> Mediterranean Residence</p>
        <p><span className="bold">Condition: </span> Completed in 2019</p>
          <p><span className="bold">Description: </span> Residential design and construction in a provincial coastal area of Greece, Mani.</p>
         </div>
        </div>

        <div className='ProjectPageImages'>
          <img src={require('../../Pages/ProjectPages/ProjectPagesImages/mediterraneanResidence/1.jpg')} alt='' />

        <img src={require('../../Pages/ProjectPages/ProjectPagesImages/mediterraneanResidence/2.jpg')} alt='' />

        <img src={require('../../Pages/ProjectPages/ProjectPagesImages/mediterraneanResidence/3.jpg')} alt='' />

        <img src={require('../../Pages/ProjectPages/ProjectPagesImages/mediterraneanResidence/4.jpg')} alt='' />



          </div>

          <div className="ProjectPageLinks">
          <p><Link to='/home'>{"<"}Go Back</Link></p>
        <p><a href="#projecttop">{"^"}</a></p>
          </div>

        </div>
    );
  }
};

import React from 'react';
import './ProjectPageDisplay.css';
import { Link } from 'react-router-dom';


export class ProjectPageDisplayMaroccanResidence extends React.Component {
  render() {
    return (
      <div id='projecttop'>
        <div className='ProjectComments'>
         <p className="projectStart"><Link to='/home'>{"<"}Go Back</Link></p>
        <div className="projectBackg">
          <p><span className="bold">Title: </span> Maroccan Residence</p>
          <p><span className="bold">Condition: </span> Completed in 2018</p>
          <p><span className="bold">Description: </span> This is a house inspired by the influence of Yves Saint Laurent to the maroccan style of nomadic living.</p>
         </div>
        </div>

        <div className='ProjectPageImages'>
          <img src={require('../../Pages/ProjectPages/ProjectPagesImages/maroccanResidence/0.png')} alt='' />

        <img src={require('../../Pages/ProjectPages/ProjectPagesImages/maroccanResidence/2.png')} alt='' />

      <img src={require('../../Pages/ProjectPages/ProjectPagesImages/maroccanResidence/3.png')} alt='' />

          </div>

          <div className="ProjectPageLinks">
          <p><Link to='/home'>{"<"}Go Back</Link></p>
        <p><a href="#projecttop">{"^"}</a></p>
          </div>

        </div>
    );
  }
};

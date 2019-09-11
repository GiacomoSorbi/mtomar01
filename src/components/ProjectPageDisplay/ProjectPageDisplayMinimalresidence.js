import React from 'react';
import './ProjectPageDisplay.css';

export class ProjectPageDisplayMinimalresidence extends React.Component {
  render() {
    return (
      <div id='projecttop'>
        <div className='ProjectComments'>
         <p className="projectStart"><a href='/index.html'>{"<"}Go Back</a></p>
        <div className="projectBackg">
          <p><span className="bold">Title: </span> Minimal Residence</p>
        <p><span className="bold">Condition: </span> Completed in 2008</p>
          <p><span className="bold">Description: </span> A pool mansion designed and built in the outskirts of Athens, Greece. The inspiration of this design was based on a combination of exposed materials and modernism.</p>
         </div>
        </div>

        <div className='ProjectPageImages'>
          <img src={require('../../Pages/ProjectPages/ProjectPagesImages/minimalResidence/3.JPG')} alt='' />

          <img src={require('../../Pages/ProjectPages/ProjectPagesImages/minimalResidence/4.JPG')} alt='' />
        <img src={require('../../Pages/ProjectPages/ProjectPagesImages/minimalResidence/5.JPG')} alt='' />

      <img src={require('../../Pages/ProjectPages/ProjectPagesImages/minimalResidence/6.jpg')} alt='' />

    <img src={require('../../Pages/ProjectPages/ProjectPagesImages/minimalResidence/7.JPG')} alt='' />

  <img src={require('../../Pages/ProjectPages/ProjectPagesImages/minimalResidence/8.jpg')} alt='' />
        <img src={require('../../Pages/ProjectPages/ProjectPagesImages/minimalResidence/9.JPG')} alt='' />

      <img src={require('../../Pages/ProjectPages/ProjectPagesImages/minimalResidence/10.jpg')} alt='' />

    <img src={require('../../Pages/ProjectPages/ProjectPagesImages/minimalResidence/11.JPG')} alt='' />

  <img src={require('../../Pages/ProjectPages/ProjectPagesImages/minimalResidence/12.jpg')} alt='' />
      <img src={require('../../Pages/ProjectPages/ProjectPagesImages/minimalResidence/13.JPG')} alt='' />

    <img src={require('../../Pages/ProjectPages/ProjectPagesImages/minimalResidence/14.jpg')} alt='' />
          <img src={require('../../Pages/ProjectPages/ProjectPagesImages/minimalResidence/1.JPG')} alt='' />

        <img src={require('../../Pages/ProjectPages/ProjectPagesImages/minimalResidence/2.jpg')} alt='' />





          </div>

          <div className="ProjectPageLinks">
          <p><a href="/index.html">{"<"}Go Back</a></p>
        <p><a href="#projecttop">{"^"}</a></p>
          </div>

        </div>
    );
  }
};

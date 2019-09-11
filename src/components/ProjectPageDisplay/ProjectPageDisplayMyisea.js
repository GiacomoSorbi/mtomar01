import React from 'react';
import './ProjectPageDisplay.css';

export class ProjectPageDisplayMyisea extends React.Component {
  render() {
    return (
      <div id='projecttop'>
        <div className='ProjectComments'>
         <p className="projectStart"><a href='/index.html'>{"<"}Go Back</a></p>
        <div className="projectBackg">
          <p><span className="bold">Title: </span> MY I-SEA Yacht</p>
          <p><span className="bold">Condition: </span> Completed in 2009</p>
          <p><span className="bold">Description: </span> This project is an interior and exterior renovation of the yacht MY I-SEA that belongs to the royal family of the United Arab Emirates.</p>
         </div>
        </div>

        <div className='ProjectPageImages'>
          <img src={require('../../Pages/ProjectPages/ProjectPagesImages/Yacht/1.JPG')} alt='' />

        <img src={require('../../Pages/ProjectPages/ProjectPagesImages/Yacht/2.JPG')} alt='' />

      <img src={require('../../Pages/ProjectPages/ProjectPagesImages/Yacht/3.JPG')} alt='' />
    <img src={require('../../Pages/ProjectPages/ProjectPagesImages/Yacht/4.JPG')} alt='' />

  <img src={require('../../Pages/ProjectPages/ProjectPagesImages/Yacht/5.JPG')} alt='' />

<img src={require('../../Pages/ProjectPages/ProjectPagesImages/Yacht/6.JPG')} alt='' />

      <img src={require('../../Pages/ProjectPages/ProjectPagesImages/Yacht/7.JPG')} alt='' />

    <img src={require('../../Pages/ProjectPages/ProjectPagesImages/Yacht/8.JPG')} alt='' />


          </div>

          <div className="ProjectPageLinks">
          <p><a href="/index.html">{"<"}Go Back</a></p>
        <p><a href="#projecttop">{"^"}</a></p>
          </div>

        </div>
    );
  }
};

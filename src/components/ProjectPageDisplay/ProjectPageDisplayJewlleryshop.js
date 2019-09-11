import React from 'react';
import './ProjectPageDisplay.css';

export class ProjectPageDisplayJewlleryshop extends React.Component {
  render() {
    return (
      <div id='projecttop'>
        <div className='ProjectComments'>
         <p className="projectStart"><a href='/index.html'>{"<"}Go Back</a></p>
        <div className="projectBackg">
          <p><span className="bold">Title: </span> Jewllery Shop</p>
        <p><span className="bold">Condition: </span> Completed in 2012</p>
          <p><span className="bold">Description: </span> A jewllery shop that required our expertise in safety design. Minimal and reflective surfaces combined with black and white color palette.</p>
         </div>
        </div>

        <div className='ProjectPageImages'>
          <img src={require('../../Pages/ProjectPages/ProjectPagesImages/jewlleryShop/1.jpg')} alt='' />
        <img src={require('../../Pages/ProjectPages/ProjectPagesImages/jewlleryShop/2.jpg')} alt='' />
      <img src={require('../../Pages/ProjectPages/ProjectPagesImages/jewlleryShop/3.jpg')} alt='' />
    <img src={require('../../Pages/ProjectPages/ProjectPagesImages/jewlleryShop/4.jpg')} alt='' />

          </div>

          <div className="ProjectPageLinks">
          <p><a href="/index.html">{"<"}Go Back</a></p>
        <p><a href="#projecttop">{"^"}</a></p>
          </div>

        </div>
    );
  }
};

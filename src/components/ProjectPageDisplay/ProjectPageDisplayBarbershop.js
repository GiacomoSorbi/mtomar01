import React from 'react';
import './ProjectPageDisplay.css';

export class ProjectPageDisplayBarbershop extends React.Component {
  render() {
    return (
      <div id='projecttop'>
        <div className='ProjectComments'>
         <p className="projectStart"><a href='/index.html'>{"<"}Go Back</a></p>
        <div className="projectBackg">
          <p><span className="bold">Title: </span> Barber Shop</p>
        <p><span className="bold">Condition: </span> Completed in 2014</p>
          <p><span className="bold">Description: </span> A vintage space that has as its main goal to make the customers feel calm and refreshed. Walnut and burgundy leather helpd with the creation of the aforementioned feeling.</p>
         </div>
        </div>

        <div className='ProjectPageImages'>
          <img src={require('../../Pages/ProjectPages/ProjectPagesImages/barbershop/2.jpg')} alt='' />
        <img src={require('../../Pages/ProjectPages/ProjectPagesImages/barbershop/5.jpg')} alt='' />
      <img src={require('../../Pages/ProjectPages/ProjectPagesImages/barbershop/7.jpg')} alt='' />

          </div>

          <div className="ProjectPageLinks">
          <p><a href="/index.html">{"<"}Go Back</a></p>
        <p><a href="#projecttop">{"^"}</a></p>
          </div>

        </div>
    );
  }
};

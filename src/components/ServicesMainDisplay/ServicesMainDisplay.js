import React from 'react';
import './ServicesMainDisplay.css';

export class ServicesMainDisplay extends React.Component {
  render() {
    return (
      <div className='PageContainer'>
      <div className="ServicesContainer">
        <h2>Our Services</h2>
        <div className="info">
          <img src={require('../../Pages/Services/ServicesImages/designing.png')} alt='' />
          <div className="text">
            <h1>Architectural and Decorative Study</h1>
            <p>We visit your space in order to detail measure it and start depicting it on a digital form. After a personal meeting with you, our experienced 3D designers will build a model of the finalised project which will be presented to you at its final form.</p>
          </div>
        </div>
        <div className="info">
          <div className="text left">
            <h1>Constructional Supervision</h1>
            <p>Our building site overseers, will be visiting your space during the construction so that it is made sure that the tasks of each constructional team are being followed and that the project is moving on as scheduled until the very end of it.</p>
          </div>
          <img src={require('../../Pages/Services/ServicesImages/constructing.png')} alt='' />
        </div>
        <div className="info">
        <img  src={require('../../Pages/Services/ServicesImages/totalassumption.png')} alt='' />
          <div className="text">
            <h1>Total Project Assumption</h1>
            <p>We undertake the complete construction of your space. Our experienced crews and technicians will work together flawlessly in the minimum time to deliver the desired result. Exactly as it was designed.</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
};

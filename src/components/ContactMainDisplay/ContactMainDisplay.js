import React from 'react';
import './ContactMainDisplay.css';

export class ContactMainDisplay extends React.Component {
  render() {
    return (
      <div className='ContactPageContainer'>
        <div className='mainImage'>
        <img src={require('../../Pages/Contact/ContactImages/office.jpg')} alt='' />
        </div>
        <div className='contactFlex'>
        <div className='contactContact2'>
          <p className='contactTitles'>Contact Us</p>
          <p>tectus@tectus.gr</p>
          <p>+30 21 0571 4826</p>
          <p>Ethnikis Antistaseos 79 & Leof. Thivon </p>
          <p>Peristeri, Attiki, Greece 121 34</p>
        </div>
        <div className='contactUs'>
          <p className='contactTitles'>Follow Us</p>
          <div className='contactFollow'>
            <a href='https://www.facebook.com/tectusdesign/'  target="_blank" rel="noopener noreferrer" ><img src={require('../../Pages/Contact/ContactImages/facebookdark.png')} alt='' /></a>
          <a href='https://www.linkedin.com/in/andreas-tomaras-71b01110/'  target="_blank" rel="noopener noreferrer"><img src={require('../../Pages/Contact/ContactImages/linkedindark.png')} alt='' /></a>
        <a href='https://www.instagram.com/tectus_design/'  target="_blank" rel="noopener noreferrer"><img src={require('../../Pages/Contact/ContactImages/instagramdark.png')} alt='' /></a>
          </div>
        </div>
        </div>
      </div>
    );
  }
};

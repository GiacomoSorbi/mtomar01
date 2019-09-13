import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom'



export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <div className='contact'>
            <p className='titles'>Contact Us</p>
            <p>tectus@tectus.gr</p>
            <p>+30 21 0571 4826</p>
            <p>Ethnikis Antistaseos 79 & Leof. Thivon </p>
            <p>Peristeri, Attiki, Greece 121 34</p>
          </div>
          <div>
            <p className='titles follow'>Follow Us</p>
            <div className='follow'>
              <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/tectusdesign/'><img src={require('./FooterImages/facebooklight.png')} alt='' /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/andreas-tomaras-71b01110/'><img src={require('./FooterImages/linkedinlight.png')} alt='' /></a>
          <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/tectus_design/'><img src={require('./FooterImages/instagramlight.png')} alt='' /></a>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className='titles'>Links</p>
            <nav className='footernavlinks'>
              <NavLink to="/home">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>
          <div>
            <p className='titles2 copy'>©2019 Tectus Design.</p>
            <p>Designed by Michail Tomaras</p>
          </div>
        </div>
      </footer>
    );
  }
};

import React from 'react';
import './ErrorMainDisplay.css';

export class ErrorMainDisplay extends React.Component {
  render() {
    return (
      <div className='errorMainDisplay'>
        <img src={require('../../Pages/404/404Images/404Page.png')} alt='404 error' />

          <p>Go back to <a href='/index.html'>Home</a> or continue on our <a href='/contact.html'>Socials</a></p>

      </div>

    );
  }
};

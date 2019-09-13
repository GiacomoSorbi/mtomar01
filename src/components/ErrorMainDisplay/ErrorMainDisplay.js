import React from 'react';
import './ErrorMainDisplay.css';
import { Link } from 'react-router-dom';

export class ErrorMainDisplay extends React.Component {
  render() {
    return (
      <div>
      <div className='errorMainDisplay'>
        <img src={require('../../Pages/404/404Images/404Page.png')} alt='404 error' />
      </div>
      <div className='instructions'>
      <p>Go back to</p> <Link className="a" to='/home'>Home</Link> <p>or continue on our</p> <Link className="a" to='/contact'>Socials</Link>

      </div>
      </div>
    );
  }
};

import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom'



export class NavBarServices extends React.Component {

  constructor(props) {
    super(props);

    this.handleShowChange = this.handleShowChange.bind(this);

    this.state = {
      show: 'Services'
    };

    this.links = [
      'Home',
      'Services',
      'Contact'
    ];

    this.hrefs = {
      'Home': '/home',
      'Services': '/services',
      'Contact': '/contact'
    }

  }

  getShowClass(link) {
    if (this.state.show === link) {
      return 'activelink';
    }
    return '';
  }

  handleShowChange(link) {
    this.setState({show: link});
  }


  renderShowOptions() {
    return this.links.map(link => {
      return <NavLink className={"a "+this.getShowClass(link)} to={'' + this.hrefs[link] + ''}><li id='NavLink' key={link} onClick={this.handleShowChange.bind(this, link)}>{link}</li></NavLink>;
    });
  }

  render() {
    return (
    <header className='NavBar'>
      <nav className='NavBar-show-types'>
        <ul>
          {this.renderShowOptions()}
        </ul>
      </nav>
      <div className="mainLogodiv">
        <NavLink className="mainLogodiv" id="myButton" to="/home">
        <img id="myButton" className="tectuslogo" src={require('./Images/Landpage/logo.png')} alt='logo' />
    </NavLink>
      <ul className='icons'>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/tectusdesign/"><img src={require('./Images/Landpage/facebookdark.png')} alt='facebook icon' /></a></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andreas-tomaras-71b01110/"><img src={require('./Images/Landpage/linkedindark.png')} alt='linkedin icon' /></a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tectus_design/"><img src={require('./Images/Landpage/instagramdark.png')} alt='instagram icon' /></a></li>
      </ul>
      </div>
    </header>
    );
  }
}

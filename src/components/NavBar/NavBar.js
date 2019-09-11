import React from 'react';
import './NavBar.css';



export class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.handleShowChange = this.handleShowChange.bind(this);

    this.state = {
      show: 'Home'
    };

    this.links = [
      'Home',
      'Services',
      'Contact'
    ];

    this.hrefs = {
      'Home': './index.html',
      'Services': './services.html',
      'Contact': './contact.html'
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
      return <li id='NavLink' key={link} onClick={this.handleShowChange.bind(this, link)}><a className={this.getShowClass(link)} href={'' + this.hrefs[link] + ''}>{link}</a></li>;
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
        <img id="myButton" onClick="location.href='http://localhost:3000/index.html';"  className="tectuslogo" src='./Images/Landpage/logo.png' alt='logo' />
      <ul className='icons'>
        <li><a target="_blank"rel="noopener noreferrer"  href="https://www.facebook.com/tectusdesign/"><img src='./Images/Landpage/facebookdark.png' alt='facebook icon' /></a></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andreas-tomaras-71b01110/"><img src='./Images/Landpage/linkedindark.png' alt='linkedin icon' /></a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tectus_design/"><img src='./Images/Landpage/instagramdark.png' alt='instagram icon' /></a></li>
      </ul>
      </div>
    </header>
    );
  }
}

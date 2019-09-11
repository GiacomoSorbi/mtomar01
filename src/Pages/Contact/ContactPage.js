import React from 'react';
import '../../App.css';
import { NavBarContact } from '../../components/NavBar/NavBarContact';
import { Footer } from '../../components/Footer/Footer';
import { ContactMainDisplay } from '../../components/ContactMainDisplay/ContactMainDisplay'

export class ContactPage extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBarContact />
        <ContactMainDisplay />
        <Footer />
      </div>
    )
  }
}

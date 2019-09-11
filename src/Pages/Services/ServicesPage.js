import React from 'react';
import '../../App.css';
import { NavBarServices } from '../../components/NavBar/NavBarServices';
import { Footer } from '../../components/Footer/Footer';
import { ServicesMainDisplay } from '../../components/ServicesMainDisplay/ServicesMainDisplay'

export class ServicesPage extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBarServices />
        <ServicesMainDisplay />
        <Footer />
      </div>
    )
  }
}

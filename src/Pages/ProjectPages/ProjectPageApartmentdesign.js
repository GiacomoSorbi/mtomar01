import React from 'react';
import '../../App.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { ProjectPageDisplayApartmentdesign } from '../../components/ProjectPageDisplay/ProjectPageDisplayApartmentdesign'

export class ProjectPageApartmentdesign extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ProjectPageDisplayApartmentdesign />
        <Footer />
      </div>
    )
  }
}

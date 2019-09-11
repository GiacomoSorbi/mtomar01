import React from 'react';
import '../../App.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { ProjectPageDisplayMinimalresidence } from '../../components/ProjectPageDisplay/ProjectPageDisplayMinimalresidence'

export class ProjectPageMinimalresidence extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ProjectPageDisplayMinimalresidence />
        <Footer />
      </div>
    )
  }
}

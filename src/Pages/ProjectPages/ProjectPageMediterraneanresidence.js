import React from 'react';
import '../../App.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { ProjectPageDisplayMediterraneanresidence } from '../../components/ProjectPageDisplay/ProjectPageDisplayMediterraneanresidence'

export class ProjectPageMediterraneanresidence extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ProjectPageDisplayMediterraneanresidence />
        <Footer />
      </div>
    )
  }
}

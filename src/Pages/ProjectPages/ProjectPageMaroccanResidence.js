import React from 'react';
import '../../App.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { ProjectPageDisplayMaroccanResidence } from '../../components/ProjectPageDisplay/ProjectPageDisplayMaroccanResidence'

export class ProjectPageMaroccanResidence extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ProjectPageDisplayMaroccanResidence />
        <Footer />
      </div>
    )
  }
}

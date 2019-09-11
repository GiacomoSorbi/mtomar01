import React from 'react';
import '../../App.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { ProjectPageDisplay } from '../../components/ProjectPageDisplay/ProjectPageDisplay'

export class ProjectPageTemplate extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ProjectPageDisplay />
        <Footer />
      </div>
    )
  }
}

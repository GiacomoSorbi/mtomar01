import React from 'react';
import '../../App.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { ProjectPageDisplayMyisea } from '../../components/ProjectPageDisplay/ProjectPageDisplayMyisea'

export class ProjectPageMyisea extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ProjectPageDisplayMyisea />
        <Footer />
      </div>
    )
  }
}

import React from 'react';
import '../../App.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { ProjectPageDisplayBarbershop } from '../../components/ProjectPageDisplay/ProjectPageDisplayBarbershop'

export class ProjectPageBarbershop extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ProjectPageDisplayBarbershop />
        <Footer />
      </div>
    )
  }
}

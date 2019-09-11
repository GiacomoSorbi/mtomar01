import React from 'react';
import '../../App.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { ProjectPageDisplayWaterparkcafe } from '../../components/ProjectPageDisplay/ProjectPageDisplayWaterparkcafe'

export class ProjectPageWaterparkcafe extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ProjectPageDisplayWaterparkcafe />
        <Footer />
      </div>
    )
  }
}

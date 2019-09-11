import React from 'react';
import '../../App.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { ProjectPageDisplayJewlleryshop } from '../../components/ProjectPageDisplay/ProjectPageDisplayJewlleryshop'

export class ProjectPageJewlleryshop extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ProjectPageDisplayJewlleryshop />
        <Footer />
      </div>
    )
  }
}

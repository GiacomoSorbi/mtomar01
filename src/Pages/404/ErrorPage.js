import React from 'react';
import '../../App.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { ErrorMainDisplay } from '../../components/ErrorMainDisplay/ErrorMainDisplay'

export class ErrorPage extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ErrorMainDisplay />
        <Footer />
      </div>
    )
  }
}

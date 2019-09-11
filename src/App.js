import React from 'react';
import './App.css'
import { IndexPage } from './Pages/IndexPage/IndexPage'
import { ServicesPage } from './Pages/Services/ServicesPage'
import { ContactPage } from './Pages/Contact/ContactPage'
import { ErrorPage  } from './Pages/404/ErrorPage'
import { ProjectPageTemplate } from './Pages/ProjectPages/ProjectPageTemplate'
import { ProjectPageMaroccanResidence } from './Pages/ProjectPages/ProjectPageMaroccanResidence'
import { ProjectPageMyisea } from './Pages/ProjectPages/ProjectPageMyisea'
import { ProjectPageMediterraneanresidence } from './Pages/ProjectPages/ProjectPageMediterraneanresidence'
import { ProjectPageMinimalresidence } from './Pages/ProjectPages/ProjectPageMinimalresidence.js'
import { ProjectPageApartmentdesign } from './Pages/ProjectPages/ProjectPageApartmentdesign.js'
import { ProjectPageWaterparkcafe } from './Pages/ProjectPages/ProjectPageWaterparkcafe.js'
import { ProjectPageJewlleryshop } from './Pages/ProjectPages/ProjectPageJewlleryshop.js'
import { ProjectPageBarbershop } from './Pages/ProjectPages/ProjectPageBarbershop.js'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path="/index.html" component={IndexPage} />
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/services.html" component={ServicesPage} />
        <Route exact path="/contact.html" component={ContactPage} />
        <Route exact path="/dramaticresidence.html" component={ProjectPageTemplate} />
        <Route exact path="/maroccanresidence.html" component={ProjectPageMaroccanResidence} />
        <Route exact path="/myiseayacht.html" component={ProjectPageMyisea} />
        <Route exact path="/mediterraneanresidence.html" component={ProjectPageMediterraneanresidence} />
        <Route exact path="/minimalresidence.html" component={ProjectPageMinimalresidence} />
        <Route exact path="/apartmentdesign.html" component={ProjectPageApartmentdesign} />
        <Route exact path="/waterparkcafe.html" component={ProjectPageWaterparkcafe} />
        <Route exact path="/jewlleryshop.html" component={ProjectPageJewlleryshop} />
      <Route exact path="/barbershop.html" component={ProjectPageBarbershop} />

        <Route component={ErrorPage} />
      </Switch>
    </Router>
  }
}

export default App;

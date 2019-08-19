import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import AssessmentDetails from './components/assessments/AssessmentDetails'
import OratorDetails from './components/orators/OratorDetails'
import CreateAssessment from './components/assessments/CreateAssessment'
import CreateOrator from './components/orators/CreateOrator'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/assessment/:id' component={AssessmentDetails} />
          <Route path='/orator/:id' component={OratorDetails} />
          <Route path='/create_assessment/:id/:firstname/:lastname' component={CreateAssessment} />
          <Route path='/create_orator' component={CreateOrator} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;

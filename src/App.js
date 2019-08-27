import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import AssessmentDetails from './components/assessments/AssessmentDetails'
import OratorDetails from './components/orators/OratorDetails'
import CreateAssessment from './components/assessments/CreateAssessment'
import AddOrator from './components/orators/AddOrator'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CoachSignUp from './components/auth/CoachSignUp'
import CoachWelcome from './components/onboarding/CoachWelcome'

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
          <Route path='/add_orator/:chapter_id/:family_id' component={AddOrator} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/coachwelcome' component={CoachWelcome} />
          <Route path='/coachsignup' component={CoachSignUp} />
          
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;

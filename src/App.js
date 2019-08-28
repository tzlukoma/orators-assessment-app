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
import * as ROUTES from './constants/routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path={ROUTES.DASHBOARD}
            component={Dashboard} />
          <Route
            path={`${ROUTES.ASSESSMENT}/:id`}
            component={AssessmentDetails}
          />
          <Route
            path={`${ROUTES.ORATOR}/:id`}
            component={OratorDetails} />
          <Route
            path={`${ROUTES.CREATE_ASSESSMENT}/:id/:firstname/:lastname`}
            component={CreateAssessment}
          />
          <Route
            path={`${ROUTES.ADD_ORATOR}/:chapter_id/:family_id`}
            component={AddOrator}
          />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.COACH_SIGNUP} component={CoachSignUp} />
          <Route path={ROUTES.COACH_WELCOME} component={CoachWelcome} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;

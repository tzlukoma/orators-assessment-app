import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/info/Home'
import Dashboard from './components/dashboard/Dashboard';
import AssessmentDetails from './components/assessments/AssessmentDetails'
import OratorDetails from './components/orators/OratorDetails'
import CreateAssessment from './components/assessments/CreateAssessment'
import AddOrator from './components/orators/AddOrator'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CoachSignUp from './components/auth/CoachSignUp'
import CoachWelcome from './components/info/CoachWelcome'
import ParentWelcome from './components/info/ParentWelcome'
import PrivateRoute from './components/authRoutes/PrivateRoutes'
import PublicRoute from './components/authRoutes/PublicRoutes'
import NotFound from './components/auth/NotFound'

import * as ROUTES from './constants/routes';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <PublicRoute {...props} exact path={ROUTES.HOME} component={Home} />
          <PublicRoute {...props} restricted={true} path={ROUTES.SIGN_IN} component={SignIn}/>
          <Route {...props} restricted={true} path={ROUTES.SIGN_UP} component={SignUp}/>
          <Route {...props} restricted={true} path={ROUTES.COACH_SIGNUP} component={CoachSignUp}/>
          <PrivateRoute {...props} exact path={ROUTES.DASHBOARD} component={Dashboard}/>
          <PrivateRoute {...props} path={`${ROUTES.ASSESSMENT}/:id`} component={AssessmentDetails}/>
          <PrivateRoute {...props} path={`${ROUTES.ORATOR}/:id`} component={OratorDetails}/>
          <PrivateRoute {...props} path={`${ROUTES.CREATE_ASSESSMENT}/:id/:firstname/:lastname`} component={CreateAssessment}/>
          <PrivateRoute {...props} path={ROUTES.ADD_ORATOR} component={AddOrator}/>
          <Route {...props} path={ROUTES.PARENT_WELCOME} component={ParentWelcome}/>
          <Route {...props} path={ROUTES.COACH_WELCOME} component={CoachWelcome}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;

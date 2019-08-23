import React from 'react';
import { Switch, Route }  from 'react-router-dom';

import Layout from './Hoc/Layout'

import Home from './components/home';
import OratorView from './components/orator_view';
import Admin from './components/user_views/admin';
import NewAssessment from './components/assessments/NewAssessment'
import NotFound from "./components/not_found";


const Routes = (props) => {
  return(
    <Layout>
        <Switch>
            <Route path="/orator_view/:orator_id/:lastname/:firstname/:coachview" component={OratorView} />
            <Route path="/orator_view/:orator_id/:lastname/:firstname" component={OratorView} />
            <Route path="/orator_view" component={OratorView} /> 
            {/* <Route path="/family_view/:family_id" component={Home} />
            <Route path="/chapter_view/:chapter_id" component={Home}/>
            <Route path="/chapter_view" component={Home}/> */}
            <Route path="/new_assessment/:orator_id/:lastname/:firstname" component={NewAssessment} />
            <Route path="/" exact component={Admin} />
            <Route component={NotFound} />
            
        </Switch>
    </Layout>
  )
}

export default Routes;
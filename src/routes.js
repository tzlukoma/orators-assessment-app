import React from 'react';
import { Switch, Route }  from 'react-router-dom';

import Layout from './Hoc/Layout'

import Home from './Components/home';
import OratorView from './Components/orator_view';
import NewFeedback from './Components/evaluations/NewFeedback'
import NotFound from "./Containers/not_found";


const Routes = (props) => {
  return(
    <Layout>
        <Switch>
            <Route path="/orator_view/:orator_id/:lastname/:firstname/:coachview" component={OratorView} />
            <Route path="/orator_view/:orator_id/:lastname/:firstname" component={OratorView} />
            <Route path="/orator_view" component={OratorView} /> 
            <Route path="/family_view/:family_id" component={Home} />
            <Route path="/chapter_view/:chapter_id" component={Home}/>
            <Route path="/chapter_view" component={Home}/>
            <Route path="/new_feedback/:orator_id/:lastname/:firstname" component={NewFeedback} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
            
        </Switch>
    </Layout>
  )
}

export default Routes;
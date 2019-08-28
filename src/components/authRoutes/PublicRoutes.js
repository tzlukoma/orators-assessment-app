import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const PublicRoutes = ({
    user,
    component: Comp,
    ...rest
}) => {
    return <Route {...rest} component={(props)=>(
        rest.restricted ?
            (user ? 
                <Redirect to={ROUTES.DASHBOARD}/>
                :
                <Comp {...props} user={user}/>
                )
            :
            <Comp {...props} user={user}/>
    )}/>
};

export default PublicRoutes;
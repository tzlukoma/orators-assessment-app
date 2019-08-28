import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const PrivateRoutes = ({
    user,
    component: Comp,
    ...rest
}) => {
    return <Route {...rest} component={(props)=>(
        user ?
            <Comp {...props} user={user}/>
            :
            <Redirect to={ROUTES.SIGN_IN}/>
    )}/>
};

export default PrivateRoutes;
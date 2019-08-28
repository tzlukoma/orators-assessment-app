import React from 'react';
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const Home = ({ user }) => {
    if(user) return <Redirect to={ROUTES.DASHBOARD} />
    return (
        <div className="container valign-wrapper" style={{height:'30rem', padding:50}}>
            <h4 className="center">This is the home page where we describe everything about the app.</h4>
        </div>
    );
};

export default Home;
import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const Home = ({ user }) => {
    if (user) return <Redirect to={ROUTES.DASHBOARD} />
    return (
        <div className="container" style={{ height: '30rem', padding: 30 }}>
            <div className="container" style={{ padding: 10 }}>
            <h4 className="center">This is the home page where we describe everything about the app.</h4>
            </div>
            <div className="container center" style={{padding: 10}}>
                <Link to={ROUTES.SIGN_IN} className="btn blue">Login</Link><Link to={ROUTES.SIGN_UP} className="btn blue lighten-2" style={{marginLeft:10}}>Sign-up</Link>
            </div>
        </div>
    );
};

export default Home;
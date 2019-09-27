import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import '../info/Home.css'

const Home = ({ user }) => {
    if (user) return <Redirect to={ROUTES.DASHBOARD} />
    return (
        <div className="home-container" style={{ padding: 30 }}>
            <div className="container" style={{ padding: 10 }}>
                <h4 className="center white-text">Welcome to the Orators App.</h4>
                <div className="kids-illustration" style={{ margin: '1rem', align: 'center', padding: '1rem' }}>
                    <img style={{ margin: '20px 10px' }} alt="illustration of young people" src="/img/orators-in-action.png"></img>
                </div>
            </div>
            <div className="container center" style={{ padding: 10 }}>
                <Link to={ROUTES.SIGN_IN} className="btn blue z-depth-0">Login</Link>
                <Link to={ROUTES.SIGN_UP} className="btn blue lighten-2 z-depth-0" style={{ marginLeft: 10 }}>Sign-up</Link>
            </div>
            <div className="container white-text center" >
                <Link to={ROUTES.COACH_SIGNUP} style={{ textDecoration: 'none' }}>Coach Sign Up</Link>
            </div>
            <div className="orators-logo" style={{ margin: '10px', align: 'center' }}>
                <img alt="orators-logo" src="img/nj.orators-logo.png"></img>
            </div>
        </div>
    );
};

export default Home;
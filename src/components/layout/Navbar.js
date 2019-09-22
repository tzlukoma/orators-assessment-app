import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

import * as ROUTES from '../../constants/routes'


const Navbar = (props) => {
    const { auth, profile } = props
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
    return (
        <div>
            <nav className="nav-wrapper white ">
                <div className="container">
                    <ul className="left">
                        <Link
                            to={ROUTES.HOME} className="brand-logo">
                            <img
                                className="orator-logo"
                                alt="coach-logo"
                                src="/img/Logo-Long.png">
                            </img>
                        </Link>
                        <li style={{color:'black', marginLeft:300}}>
                    {process.env.REACT_APP_ENV_INDICATOR}
                    </li>
                    </ul>
                    

                    {links}
                    
                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);
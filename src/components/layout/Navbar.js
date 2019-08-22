import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


const Navbar = (props) => {
    const { auth, profile } = props
    //console.log(auth)
    const links = auth.uid ? <SignedInLinks profile={profile} />: <SignedOutLinks />
    return (
        <div>
            <nav className="nav-wrapper white ">
                <div className="container">
                    <ul className="left">
                        <Link to='/' className="brand-logo"><img className="orator-logo" alt="coach-logo" src="/img/Logo-Long.png"></img></Link>
                    </ul>
                    {links}
                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = (state) => {
   console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);
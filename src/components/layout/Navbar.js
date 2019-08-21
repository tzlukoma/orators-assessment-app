import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Navbar = () => {
    return (
        <div>
            <nav className="nav-wrapper white ">
                <div className="container">
                    <ul className="left">
                        <Link to='/' className="brand-logo"><img className="orator-logo" alt="coach-logo" src="/img/Logo-Long.png"></img></Link>
                    </ul>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right hide-on-med-and-down">
            <li><NavLink to='/create_assessment/3/Ssanyu/Lukoma'>New Assessment</NavLink></li>
            <li><NavLink to='/'>Log out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">TL</NavLink></li>

        </ul>
    );
};

export default SignedInLinks;
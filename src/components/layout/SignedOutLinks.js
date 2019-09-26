import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <>
        <ul className="right hide-on-small-only">
        <li><NavLink to='#'>{process.env.REACT_APP_ENV_INDICATOR}</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
        </ul>
        <ul className="right hide-on-med-and-up">
        <li><NavLink to='#'>{process.env.REACT_APP_ENV_INDICATOR}</NavLink></li>
        </ul>
        </>
    );
};

export default SignedOutLinks;
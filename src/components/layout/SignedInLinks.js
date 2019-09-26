import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

import * as ROUTES from '../../constants/routes'

const SignedInLinks = (props) => {
    return (
        <ul className="right ">
            <li><button className='btn-flat hide-on-small-only' onClick={props.signOut}>{process.env.REACT_APP_ENV_INDICATOR}</button></li>
            <li><button className='btn-flat hide-on-small-only' onClick={props.signOut}>Log out</button></li>
            {/* Used for sign out on mobile */}
            <li>
                <Link to={ROUTES.PROFILE} className="btn btn-floating deep-purple lighten-3 hide-on-med-and-up">
                    {props.profile.initials}
                </Link>
            </li>
            <li>
                {/* Need to determine use on bigger screens */}

                <Link to={ROUTES.PROFILE} className="btn btn-floating deep-purple lighten-3 hide-on-small-only">
                    {props.profile.initials}
                </Link>
            </li>

        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
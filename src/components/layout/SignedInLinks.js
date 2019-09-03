import React from 'react';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul className="right ">
            <li><button className='btn-flat hide-on-small-only' onClick={props.signOut}>Log out</button></li>
            {/* Used for sign out on mobile */}
            <li onClick={props.signOut}> 
                <button className="btn btn-floating deep-purple lighten-3 hide-on-med-and-up">
                    {props.profile.initials}
                </button>
            </li>
            <li>
                {/* Need to determine use on bigger screens */}
                <button className="btn btn-floating deep-purple lighten-3 hide-on-small-only">
                    {props.profile.initials}
                </button>
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
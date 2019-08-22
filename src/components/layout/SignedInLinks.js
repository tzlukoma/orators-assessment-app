import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul className="right hide-on-small-only">
            <li><NavLink to='/create_assessment/3/Ssanyu/Lukoma'>New Assessment</NavLink></li>
            <li><button className='btn-flat' onClick={props.signOut}>Log out</button></li>
            <li><NavLink to='/' className="btn btn-floating deep-purple lighten-3">{props.profile.initials}</NavLink></li>

        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);
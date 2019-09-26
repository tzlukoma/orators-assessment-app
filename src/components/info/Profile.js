import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'

import * as ROUTES from '../../constants/routes'

const Profile = ({signOut, profile, auth}) => {
    if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN}/>
    else { 
        return (
        
            <div >
                <div className="container center">
                    <h4 className="deep-purple-text" style={{padding: 20}}>
                    {profile.firstName} {profile.lastName}</h4>
                    <button onClick={signOut} className="btn white-text blue lighten-3 center z-depth-0" style={{margin:20}}>Sign Out</button>
                    <div>
                        <a href='http://bit.ly/orators-app-feedback' style={{margin:20}}>Provide feedback</a>
                    </div>
                </div>
            </div>
    
        );
    }
    
};

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
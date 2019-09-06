import React from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const Profile = ({ auth, profile }) => {
    if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN}/>
    else { 
        return (
        
            <div >
                <div className="container center">
                    <h4 className="deep-purple-text" style={{padding: 20}}>Welcome to<br>
                    </br>The Orators App</h4>
                    <Link to={ROUTES.DASHBOARD} className="btn white-text blue lighten-3 center z-depth-0">Go to the Dashboard</Link>
                </div>
            </div>
    
        );
    }
    
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}



export default connect(mapStateToProps)(Profile);
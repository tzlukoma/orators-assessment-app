import React from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const ParentWelcome = ({ auth, profile }) => {
    if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN}/>
    else { 
        return (
        
            <div >
                <div className="container center">
                    <h4 className="deep-purple-text" 
                        style={{padding: 30}}>
                            Welcome <br></br>{profile.firstName} {profile.lastName}</h4>
                    <h5 style={{padding:'10px 30px'}}>You are signed in as a member of the</h5>
                    <h4 className="deep-purple-text"style={{padding:30}}> {profile.chapter} Chapter </h4>
                    <Link to={ROUTES.ADD_ORATOR} className="btn white-text blue lighten-2 center z-depth-0">Add an Orator</Link>
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



export default connect(mapStateToProps)(ParentWelcome);
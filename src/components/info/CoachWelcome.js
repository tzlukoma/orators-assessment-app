import React from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const CoachWelcome = ({ auth, profile }) => {
    if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />
    else {
        return (

            <div >
                <div className="container center">
                    <h4 className="deep-purple-text" style={{ padding: 20 }}>Welcome<br>
                    </br>Coach {profile.firstName} {profile.lastName}</h4>
                    <img style={{ margin: '10px 10px' }} alt="illustration of young people" src="/img/orators-in-action.png"></img>
                    <h5 style={{ padding: '10px 30px' }}>You are signed in as a member of the</h5>
                    <h4 className="deep-purple-text" style={{ padding: 25 }}> {profile.chapter} Chapter </h4>
                    <Link to={ROUTES.DASHBOARD} className="btn white-text blue lighten-3 center z-depth-0">Go to the Dashboard</Link>
                </div>
            </div>

        );
    }

};

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}



export default connect(mapStateToProps)(CoachWelcome);
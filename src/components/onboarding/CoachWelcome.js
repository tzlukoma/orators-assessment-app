import React from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

const CoachWelcome = ({ auth }) => {
    console.log(auth)
    if (!auth.uid) return <Redirect to='/'/>
    else { 
        return (
        
            <div >
                <div className="container center">
                    <h4 className="deep-purple-text" style={{padding: 20}}>Welcome to<br>
                    </br>The Orators App</h4>
                    <Link to="/" className="btn white-text blue lighten-3 center z-depth-0">Go to the Dashboard</Link>
                </div>
            </div>
    
        );
    }
    
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}



export default connect(mapStateToProps)(CoachWelcome);
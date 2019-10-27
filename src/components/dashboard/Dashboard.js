import React, { Component } from 'react';
import { connect } from 'react-redux'
import CoachView from './CoachView';
import FamilyView from './FamilyView'
import AdminView from './AdminView'

class Dashboard extends Component {
    render() {
        const { profile, uid } = this.props
        
        if(!profile.isLoaded) {
            return <div className="container" style={{paddingTop:50, textAlign: 'center'}}>Profile Loading ...</div>
        } else {
            return (
                <div className="dashboard container">
                        { 
                            profile.role && profile.role.isCoach ? <CoachView /> 
                            : profile.role && profile.role.isAdmin ? <AdminView />
                            : <FamilyView uid={uid}/>
                        }
                    </div>
            );
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        uid: state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(Dashboard)


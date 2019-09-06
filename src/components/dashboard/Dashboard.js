import React, { Component } from 'react';
import { connect } from 'react-redux'
import CoachView from './CoachView';
import FamilyView from './FamilyView'

class Dashboard extends Component {
    render() {
        const { profile, uid } = this.props
        
        return (
            <div className="dashboard container">
                    {profile.role && profile.role.isCoach? 
                         <CoachView />
                        : 
                        <FamilyView uid={uid}/>
                    }
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        uid: state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(Dashboard)


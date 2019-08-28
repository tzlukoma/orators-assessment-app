import React, { Component } from 'react';
import AssessmentList from '../assessments/AssessmentList'
import OratorList from '../orators/OratorList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    
    render() {
        const { assessments, orators, notifications, profile } = this.props
        
        return (
            <div className="dashboard container">
                <div className="row">
                    {profile.coach ? `This is the coach view`: null}
                    <div className="col s12 m6 l4">
                        <h4>Assessments</h4>
                        <AssessmentList assessments={assessments} />
                    </div>
                    <div className="col s12 m5 l4 offset-m1">
                        <h4>Notifications</h4>
                        <Notifications notifications={notifications}/>
                    </div>
                    <div className="col s12 m5 l4 offset-m1">
                        <h4>Orators</h4>
                        <OratorList orators={orators}/>
                    </div>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        assessments: state.firestore.ordered.assessments,
        orators: state.firestore.ordered.orators,
        profile: state.firebase.profile,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'assessments', limit: 2, orderBy: ['createdAt','desc'] },
        { collection: 'orators', limit: 2, orderBy: ['dateOfBirth', 'asc']},
        { collection: 'notifications', limit:2, orderBy: ['time', 'desc']}
    ])
)(Dashboard)
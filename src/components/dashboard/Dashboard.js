import React, { Component } from 'react';
import AssessmentList from '../assessments/AssessmentList'
import OratorList from '../orators/OratorList'
import Notifications from '../dashboard/Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const { assessments, orators, notifications, auth } = this.props
        
        if(!auth.uid) return <Redirect to='/signin'/>
        
        return (
            <div className="dashboard container">
                <div className="row">

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
    // console.log(state)
    return {
        assessments: state.firestore.ordered.assessments,
        orators: state.firestore.ordered.orators,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'assessments', limit: 2, orderBy: ['createdAt','desc'] },
        { collection: 'orators', orderBy: ['dateOfBirth', 'asc']},
        { collection: 'notifications', limit:3, orderBy: ['time', 'desc']}
    ])
)(Dashboard)
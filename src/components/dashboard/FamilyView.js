import React, { Component } from 'react';
import AssessmentList from '../assessments/AssessmentList'
import OratorList from '../orators/OratorList'
import Notifications from './Notifications'
import CoachView from './CoachView'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class FamilyView extends Component {
    

    render() {
        // console.log(this.props)
        const { orators, notifications } = this.props
                return (
                    <div className="dashboard container">
                        <div className="row">

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
    console.log(state)
    return {
        orators: state.firestore.ordered.orators,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'orators', limit: 2, orderBy: ['dateOfBirth', 'asc']},
        { collection: 'notifications', limit:2, orderBy: ['time', 'desc']}
    ])
)(FamilyView)
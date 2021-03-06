import React, { Component } from 'react';
import AssessmentList from '../assessments/AssessmentList'
import OratorList from '../orators/OratorList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

 

class CoachView extends Component {

    render() {
        const { assessments, orators, notifications, profile } = this.props
        return (
            <div className="row">
                <div className="col s12 m6 l6">
                    <h4>Chapter Orators</h4>
                    <h5>{profile.chapter} Chapter</h5>
                    <h6>{orators && orators.length} Orator{orators && orators.length > 1 ? 's' : null}</h6>
                    <OratorList orators={orators} assessments={assessments}/>
                </div>
                <div className="col s12 m6 l6">
                    <h4>My Assessments</h4>
                    {
                        !assessments || assessments.length < 1 ? <div>No Assessments to Show</div>
                            : <AssessmentList assessments={assessments} />
                    }
                </div>

                <div className="col s12 m12 l6">
                    <h4>Notifications</h4>
                    <Notifications notifications={notifications} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.firebase.profile,
        assessments: state.firestore.ordered.assessments,
        orators: state.firestore.ordered.orators,
        notifications: state.firestore.ordered.notifications
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        return [
        { 
            collection: 'assessments', 
            where: [
                ['chapter_id', '==', props.profile.chapter_id]
              ],
            orderBy: ['createdAt', 'desc'] 
        },
        { 
            collection: 'orators', 
            where: [
                ['chapter_id', '==', props.profile.chapter_id]
              ]
        },
        { 
            collection: 'notifications', 
            limit: 2, 
            orderBy: ['time', 'desc'] }
      ]
    }
    )
  )(CoachView)
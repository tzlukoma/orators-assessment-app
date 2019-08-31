import React, { Component } from 'react';
import AssessmentList from '../assessments/AssessmentList'
import OratorList from '../orators/OratorList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class CoachView extends Component {

    renderCoachView = (assessments, orators) => {
        return (
            <div>
                <div className="col s12 m5 l4 offset-m1">
                    <h4>My Assessments</h4>
                    {
                        !assessments ? <div>No Assessments to Show</div>
                            : <AssessmentList assessments={assessments} />
                    }
                </div>
                <div className="col s12 m5 l4 offset-m1">
                    <h4>Orators</h4>
                    <OratorList orators={orators} />
                </div>
            </div>
        )
    }

    renderParentView = (assessments, orators) => {
        return (<div>
            <div className="col s12 m5 l4 offset-m1">
                <h4>My Assessments</h4>
                {
                    !assessments ? <div>No Assessments to Show</div>
                        : <AssessmentList assessments={assessments} />
                }
            </div>
            <div className="col s12 m5 l4 offset-m1">
                <h4>Orators</h4>
                <OratorList orators={orators} />
            </div>
        </div>
        )
    }

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
    const coach_id = state.firebase.auth.uid
    const orators = state.firestore.ordered.orators
    const assessments = state.firestore.ordered.assessments
    const chapter_id = state.firebase.profile.chapter_id
    const chapterOrators = orators && orators.filter(function (orator) {
        return orator.chapter_id === chapter_id;
    })
    const coachAssessments = assessments && assessments.filter(function (assessment) {
        return assessment.coach_id === coach_id;
    })
    return {
        assessments: coachAssessments,
        orators: chapterOrators,
        profile: state.firebase.profile,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'assessments', limit: 2, orderBy: ['createdAt', 'desc'] },
        { collection: 'orators', limit: 5, orderBy: ['dateOfBirth', 'asc'] },
        { collection: 'notifications', limit: 2, orderBy: ['time', 'desc'] }
    ])
)(CoachView)
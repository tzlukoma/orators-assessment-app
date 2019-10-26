import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect, Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const AssessmentDetails = (props) => {
    // console.log(props)
    const { assessment, auth } = props;
    assessment && console.log(moment.unix(assessment.createdAt.seconds).format("LLLL"))
    // if(!auth.uid) return <Redirect to={ROUTES.SIGN_IN}/>
    if (assessment) {
        return (
            <div className="container section asessment-details">
                <div className="card z-depth-1">
                    <div className="card-content">
                        <span className="card-title">Assessment for <Link to={`${ROUTES.ORATOR}/${assessment.orator_id}`}>{assessment.firstName} {assessment.lastName}</Link></span>
                        <p>{assessment.comment}</p>
                        <p>{assessment.remarks}</p>
                        <div className="divider" style={{ marginTop: 10, marginBottom: 10 }}></div>
                        <p className="light-blue-text" style={{ paddingBottom: 10 }}>Ratings</p>
                        <div className="row">
                            <div className="col s8 m3">
                                Word Choice / Vocabulary:
                            </div>
                            <div className="col s4">
                                {assessment.vocabulary}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8 m3">
                                Filler Words:
                            </div>
                            <div className="col s4">
                                {assessment.filler_words}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8 m3">
                                Content:
                            </div>
                            <div className="col s4">
                                {assessment.content}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8 m3">
                                Projection & Volume:
                            </div>
                            <div className="col s4">
                                {assessment.projection_volume}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8 m3">
                                Enunciation:
                            </div>
                            <div className="col s4">
                                {assessment.enunciation}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8 m3">
                                Eye Contact
                            </div>
                            <div className="col s4">
                                {assessment.eye_contact}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8 m3">
                                Posture
                            </div>
                            <div className="col s4">
                                {assessment.posture}
                            </div>
                        </div>
                        {assessment.attachment ?
                            <div>
                                <div className="divider" style={{ marginTop: 10, marginBottom: 10 }}></div>
                                <p className="light-blue-text" style={{ paddingBottom: 10 }}>Attachment</p>
                                <a className="purple-text"href={assessment.attachmentURL} target="_blank" rel="noopener noreferrer" >{assessment.attachmentName}</a>
                            </div>
                            : null
                        }
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {assessment.coachFirstName} {assessment.coachLastName}</div>
                        <div>{moment(assessment.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )

    } else {
        return (
            <div className="container center">
                <p>Loading assessment ...</p>
            </div>
        );
    }

};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const assessments = state.firestore.data.assessments
    const assessment = assessments ? assessments[id] : null
    return {
        assessment: assessment,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        return [
            {
                collection: 'assessments',
                where: [
                    ['orator_id', '==', props.match.params.orator_id]
                ]
            }
        ]
    }
    )
)(AssessmentDetails)
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect, Link } from 'react-router-dom'

const AssessmentDetails = (props) => {
    // console.log(props)
    const { assessment, auth } = props;
    if(!auth.uid) return <Redirect to='/signin'/>
    if (assessment) {
        return (
            <div className="container section asessment-details">
                <div className="card z-depth-1">
                    <div className="card-content">
                        <span className="card-title">Assessment for <Link to={`/orator/${assessment.orator_id}`}>{assessment.firstname} {assessment.lastname}</Link></span>
                        <p>{assessment.comment}</p>
                        <p>{assessment.remarks}</p>
                        <div className="divider" style={{ marginTop: 10, marginBottom: 10 }}></div>
                        <p className="light-blue-text" style={{paddingBottom:10}}>Ratings</p>
                        <div className="row">
                            <div className="col s8 m3">
                                Voice Projection:
                            </div>
                            <div className="col s4">
                                {assessment.projection_rating}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8 m3">
                                Voice / Tone Variation:
                            </div>
                            <div className="col s4">
                                {assessment.tone_rating}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8 m3">
                                Poise / Posture:
                            </div>
                            <div className="col s4">
                                {assessment.poise_rating}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8 m3">
                                Focus / Coachability:
                            </div>
                            <div className="col s4">
                                {assessment.focus_rating}
                            </div>
                        </div> 
                        <div className="row">
                            <div className="col s8 m3">
                                Presentation Style:
                            </div>
                            <div className="col s4">
                                {assessment.presentation_rating}
                            </div>
                        </div>                 
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
    // console.log(state)
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
    firestoreConnect([
        { collection: 'assessments' }
    ])
)(AssessmentDetails);
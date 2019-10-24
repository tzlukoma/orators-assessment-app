import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

import AssessmentList from '../assessments/AssessmentList'




import moment from 'moment'

import * as ROUTES from '../../constants/routes'




const OratorDetails = (props) => {
    const { orator, assessments, auth, profile } = props;
    console.log(orator)
    // if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />
    if (orator) {
        return (
            <div className="container section asessment-details">
                <div className="card z-depth-1">
                    <div className="card-content" style={{paddingBottom: 10}}>
                        <span><img style={{width: 100}}src={`https://robohash.org/${orator.firstName}${orator.lastName}.png`} alt="" className="circle"></img></span><span className="card-title">{orator.firstName} {orator.lastName}</span>
                        <p>{moment().diff(orator.dateOfBirth, 'years', false)} years old</p>
                    </div>
                    {
                        profile.role && profile.role.isCoach ? 
                            <Link to={`${ROUTES.CREATE_ASSESSMENT}/${props.match.params.id}`} className="btn blue lighten-2 z-depth-0" style={{ margin: '5px 10px 15px 20px' }} >
                                <i className="material-icons left">add</i>
                                Assess {orator.firstName}
                            </Link>
                            : null
                    }
                    <div className="card-action grey lighten-4 grey-text" style={{padding: '8px 10px', marginBottom:5}}>
                        <div>{orator.parentName}'s Family</div>
                        <div>{orator.chapter} Chapter</div>
                    </div>
                </div>
                <h5 style={{padding: 10, marginBottom:0}}>{orator.firstName}'s Assessments</h5>
                <AssessmentList assessments={assessments} />
            </div>
        );
    } else {
        return (
            <div className="container center">
                <p>Loading orator report ...</p>
            </div>
        );
    }

};

const mapStateToProps = (state, ownProps) => {
    console.log('oratorDetails:',ownProps)
    const id = ownProps.match.params.id
    const orators = state.firestore.data.orators
    const assessments = state.firestore.ordered.assessments
    const orator = orators ? orators[id] : null
    const oratorAssessments = assessments && assessments.filter(function (assessment) {
        return assessment.orator_id === id;
    })
    return {
        orator: orator,
        assessments: oratorAssessments,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'orators' },
        { collection: 'assessments', orderBy: ['createdAt', 'desc'] },
    ])
)(OratorDetails);
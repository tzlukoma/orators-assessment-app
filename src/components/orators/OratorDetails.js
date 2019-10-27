import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

import AssessmentList from '../assessments/AssessmentList'

import moment from 'moment'

import * as ROUTES from '../../constants/routes'

const OratorDetails = (props) => {
    
    const { orator, assessments, profile } = props;
    
    if (orator) {
        return (
            <div className="container section asessment-details">
                <div className="card z-depth-1">
                    <div className="card-content" style={{ paddingBottom: 10 }}>
                        <span><img style={{ width: 100 }} src={`https://robohash.org/${orator[0].firstName}${orator[0].lastName}.png`} alt="" className="circle"></img></span><span className="card-title">{orator[0].firstName} {orator[0].lastName}</span>
                        <p>{moment().diff(orator[0].dateOfBirth, 'years', false)} years old</p>
                    </div>
                    {
                        profile.role && profile.role.isCoach ?
                            <Link to={`${ROUTES.CREATE_ASSESSMENT}/${props.match.params.id}`} className="btn blue lighten-2 z-depth-0" style={{ margin: '5px 10px 15px 20px' }} >
                                <i className="material-icons left">add</i>
                                Assess {orator[0].firstName}
                            </Link>
                            : null
                    }
                    <div className="card-action grey lighten-4 grey-text" style={{ padding: '8px 10px', marginBottom: 5 }}>
                        <div>{orator[0].parentName}'s Family</div>
                        <div>{orator[0].chapter} Chapter</div>
                    </div>
                </div>
                <h5 style={{ padding: 10, marginBottom: 0 }}>{orator[0].firstName}'s Assessments</h5>
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
    return {
        orator: state.firestore.ordered.orators,
        assessments: state.firestore.ordered.assessments,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        return [
            {
                collection: 'orators',
                doc: props.match.params.id

            },
            {
                collection: 'assessments',
                where: [
                    ['orator_id', '==', props.match.params.id]
                ],
                orderBy: ['createdAt', 'desc']
            }
        ]
    })

)(OratorDetails);


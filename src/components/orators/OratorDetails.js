import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link, Redirect } from 'react-router-dom'
import moment from 'moment'

import * as ROUTES from '../../constants/routes'

const OratorDetails = (props) => {
    console.log(props)
    const { orator, auth } = props;
    if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />
    if (orator) {
        return (
            <div className="container section asessment-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{orator.firstName} {orator.lastName}</span>
                        <p>{moment().diff(orator.dateOfBirth, 'years', false)} years old</p>
                    </div>
                    <Link 
                        to={`${ROUTES.CREATE_ASSESSMENT}/${props.match.params.id}/${orator.firstName}/${orator.lastName}`}
                        style={{ margin: 20 }}  className="btn blue lignten-2 z-depth-0">
                            <i className="material-icons left">add</i>
                            Assess {orator.firstName}
                    </Link>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>{orator.parentName}'s Family</div>
                        <div>{orator.chapter} Chapter</div>
                    </div>
                </div>
            </div>
        );
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
    const orators = state.firestore.data.orators
    const orator = orators ? orators[id] : null
    return {
        orator: orator,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'orators' }
    ])
)(OratorDetails);
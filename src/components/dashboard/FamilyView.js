import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import OratorList from '../orators/OratorList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import * as ROUTES from '../../constants/routes'

class FamilyView extends Component {
    render() {
        const { orators, assessments, notifications, profile } = this.props
        return (
            <div className="row">
                <div className="col s12 m6 l6">
                    <h4>My Family's Orators</h4>
                    <h5>{profile.chapter} Chapter</h5>
                    <h6>{orators && orators.length} Orator{orators && orators.length > 1 ? 's' : null}</h6>
                    <OratorList orators={orators} assessments={assessments} />
                    <Link to={ROUTES.ADD_ORATOR} className="btn grey z-depth-0"><i className="material-icons left">add</i>Add an Orator</Link>
                </div>
                <div className="col s12 m16 l6">
                    <h4>Notifications</h4>
                    <Notifications notifications={notifications} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orators: state.firestore.ordered.orators,
        notifications: state.firestore.ordered.notifications,
        profile: state.firebase.profile
    }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        return [
            {
                collection: 'orators',
                where: [
                    ['parent_id', '==', props.uid]
                ]
            },
            {
                collection: 'notifications',
                limit: 2,
                orderBy: ['time', 'desc']
            }
        ]
    }
    )
)(FamilyView)
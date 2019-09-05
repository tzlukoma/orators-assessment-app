import React, { Component }from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'


class OratorSummary extends Component {
    render() {
        const { firstName, lastName, dateOfBirth, parentName} = this.props.orator
        
        return (
            <div className={`${classes.card} orator-summary`}>
                <div className={classes.cardContent}>
                    <span className={classes.cardTitle}>{firstName} {lastName}</span>
                    <p>{moment().diff(dateOfBirth, 'years',false)} years old</p>
                    <p className={classes.cardFooter}>{parentName}'s Family</p>
                </div>
            </div>
        );
    }
}

const classes = {
	card: 'card z-depth-1',
	cardContent:'card-content grey-text text-darken-3',
	cardTitle: 'card-title',
	cardFooter: 'grey-text'

}


const mapStateToProps = (state, ownProps) => {
    const orator_id = state.orator.id
    const assessments = state.firestore.ordered.assessments
    const oratorAssessments = assessments && assessments.filter(function (assessment) {
        return assessment.orator_id === orator_id;
    })
    return {
        assessments: oratorAssessments
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'assessments', limit: 2, orderBy: ['createdAt', 'desc'] },
    ])
)(OratorSummary)
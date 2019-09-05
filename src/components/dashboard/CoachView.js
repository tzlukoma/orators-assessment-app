import React, { Component } from 'react';
import AssessmentList from '../assessments/AssessmentList'
import OratorList from '../orators/OratorList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const firstNameA = a.firstName.toUpperCase();
    const firstNameB = b.firstName.toUpperCase();
  
    let comparison = 0;
    if (firstNameA > firstNameB) {
      comparison = 1;
    } else if (firstNameA < firstNameB) {
      comparison = -1;
    }
    return comparison;
  }
  

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
      console.log(props)
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
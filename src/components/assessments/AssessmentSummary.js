import React from 'react';
import moment from 'moment'

const AssessmentSummary = ({ assessment }) => {
    return (
        <div className="card assessment-summary z-depth-1">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"> Assessment for {assessment.firstname} {assessment.lastname}</span>
                <h6 style={{marginBottom:10}}>{assessment.comment} </h6>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by {assessment.coachFirstName} {assessment.coachLastName}</div>
                    <div>{moment(assessment.createdAt.toDate()).fromNow()}</div>
                </div>
            </div>
        </div>
    );
};

export default AssessmentSummary;
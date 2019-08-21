import React from 'react';
import moment from 'moment'

const AssessmentSummary = ({ assessment }) => {
    return (
        <div className="card assessment-summary z-depth-1">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"> Assessment for {assessment.firstname} {assessment.lastname}</span>
                <h6>{assessment.comment}</h6>
                <p className="grey-text">{moment.unix(assessment.createdAt.seconds).format("LLL")}</p>
            </div>
        </div>
    );
};

export default AssessmentSummary;
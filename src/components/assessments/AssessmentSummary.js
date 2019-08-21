import React from 'react';
import moment from 'moment'

const AssessmentSummary = ({ assessment }) => {
    return (
        <div className="card assessment-summary blue lighten-5 z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Assessment for Ssanyu Lukoma</span>
                <h6>{assessment.comment}</h6>
                <p className="grey-text">{moment.unix(assessment.timestamp).format("LLL")}</p>
            </div>
        </div>
    );
};

export default AssessmentSummary;
import React from 'react';
import AssessmentSummary from './AssessmentSummary'

const AssessmentList = () => {
    return (
        <div className="assessment-list section">
            <AssessmentSummary />
            <AssessmentSummary />
            <AssessmentSummary />
            <AssessmentSummary />
        </div>
    );
};

export default AssessmentList;
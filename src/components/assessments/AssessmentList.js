import React from 'react';
import AssessmentSummary from './AssessmentSummary'

const AssessmentList = ({assessments}) => {
    return (
        <div className="assessment-list section">
            { assessments && assessments.map(assessment => {
                return (
                    <AssessmentSummary assessment={assessment} key={assessment.id} />
                )
            })}
        </div>
    );
};

export default AssessmentList;
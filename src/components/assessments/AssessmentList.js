import React from 'react';
import AssessmentSummary from './AssessmentSummary'
import { Link } from 'react-router-dom'

const AssessmentList = ({assessments}) => {
    return (
        <div className="assessment-list section">
            { assessments && assessments.map(assessment => {
                return (
                    <Link to={'/assessment/'+assessment.id}>
                        <AssessmentSummary assessment={assessment} key={assessment.id} />
                    </Link>
                    
                )
            })}
        </div>
    );
};

export default AssessmentList;
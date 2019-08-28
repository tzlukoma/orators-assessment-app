import React from 'react';
import AssessmentSummary from './AssessmentSummary'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const AssessmentList = ({assessments}) => {
    return (
        <div className="assessment-list section">
            { assessments && assessments.map(assessment => {
                return (
                    <Link to={ROUTES.ASSESSMENT+'/'+assessment.id} key={assessment.id}>
                        <AssessmentSummary assessment={assessment} key={assessment.id} />
                    </Link>
                    
                )
            })}
        </div>
    );
};

export default AssessmentList;
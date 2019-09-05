import React from 'react';
import AssessmentSummary from './AssessmentSummary'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const AssessmentList = ({assessments}) => {
    return (
        <div className="assessment-list section">
            { assessments && assessments.map(assessment => {
                const avg = 
                    ( parseInt(assessment.vocabulary)
                    + parseInt(assessment.filler_words)
                    + parseInt(assessment.projection_volume)
                    + parseInt(assessment.enunciation)
                    + parseInt(assessment.eye_contact)
                    + parseInt(assessment.posture)
                    )/6
                console.log(avg)
                return (
                    <Link to={ROUTES.ASSESSMENT+'/'+assessment.id} key={assessment.id}>
                        <AssessmentSummary avg={avg} assessment={assessment} key={assessment.id} />
                    </Link>
                    
                )
            })}
        </div>
    );
};

export default AssessmentList;
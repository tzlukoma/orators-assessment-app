import React from 'react';
import moment from 'moment'

const AssessmentSummary = (props) => {
    const { firstName, lastName, comment, coachFirstName, coachLastName, createdAt} = props.assessment
    return (
        <div className="card assessment-summary z-depth-1">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"> Assessment for {firstName} {lastName}</span>
                <h6 style={{marginBottom:10}}>{comment} </h6>
                <h6 className="deep-purple-text"style={{padding: '5px 0'}}>Average Rating: {props.avg.toFixed(2)}</h6>
                <div className="card-action grey lighten-4 grey-text" style={{padding: '5px 10px'}}>
                    <div>Posted by {coachFirstName} {coachLastName}</div>
                    <div>{moment(createdAt.toDate()).fromNow()}</div>
                </div>
            </div>
        </div>
    );
};

export default AssessmentSummary;
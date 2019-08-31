import React from 'react';
import moment from 'moment'

const OratorSummary = (props) => {
    
    const { firstName, lastName, dateOfBirth, parentName} = props.orator

    return (
        <div className="card z-depth-1 orator-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{firstName} {lastName}</span>
                <p>{moment().diff(dateOfBirth, 'years',false)} years old</p>
                <p className="grey-text">{parentName}'s Family</p>
            </div>
        </div>
    );
};

export default OratorSummary;
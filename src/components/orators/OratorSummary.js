import React from 'react';

const OratorSummary = (props) => {
    console.log(props)
    return (
        <div className="card z-depth-1 orator-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{props.orator.firstName} {props.orator.lastName}</span>
                <p>Birthday: {props.orator.dateOfBirth}</p>
                <p className="grey-text">Family ID: {props.orator.family_id}</p>
            </div>
        </div>
    );
};

export default OratorSummary;
import React from 'react';
import moment from 'moment'

const OratorSummary = (props) => {
    return (
        <div className="card z-depth-1 orator-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{props.orator.firstName} {props.orator.lastName}</span>
                <p>{moment().diff(props.orator.dateOfBirth, 'years',false)} years old</p>
                <p className="grey-text">{props.orator.family} Family</p>
            </div>
        </div>
    );
};

export default OratorSummary;
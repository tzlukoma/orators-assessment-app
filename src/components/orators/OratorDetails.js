import React from 'react';

const OratorDetails = (props) => {
    const id = props.match.params.id
    return (
        <div class="container section asessment-details">
            <div class="card z-depth-0">
                <div class="card-content">
                    <span class="card-title">Ssanyu Lukoma</span>
                    <p>Orator ID: {id}</p>
                </div>
                <div class="card-action grey lighten-4 grey-text">
                    <div>Lukoma Family</div>
                </div>
            </div>
        </div>
    );
};

export default OratorDetails;
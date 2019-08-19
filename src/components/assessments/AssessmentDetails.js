import React from 'react';

const AssessmentDetails = (props) => {
    const id = props.match.params.id
    return (
        <div class="container section asessment-details">
            <div class="card z-depth-0">
                <div class="card-content">
                    <span class="card-title">Assessment {id} for Ssanyu Lukoma</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos nostrum quasi fuga corrupti laboriosam aut, obcaecati non quis dicta officiis mollitia voluptatibus officia sunt suscipit deleniti distinctio cumque unde?</p>
                </div>
                <div class="card-action grey lighten-4 grey-text">
                    <div>Posted by Pam Smith</div>
                    <div>23 Aug 2019</div>
                </div>
            </div>
        </div>
    );
};

export default AssessmentDetails;
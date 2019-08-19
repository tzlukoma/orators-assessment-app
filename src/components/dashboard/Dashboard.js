import React, { Component } from 'react';
import AssessmentList from '../assessments/AssessmentList'
import OratorList from '../orators/OratorList'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"><AssessmentList /></div>
                    <div className="col s12 m5 offset-m1">
                        <OratorList />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
import React, { Component } from 'react';
import AssessmentList from '../assessments/AssessmentList'
import OratorList from '../orators/OratorList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const { assessments } = this.props
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"><AssessmentList assessments={assessments} /></div>
                    <div className="col s12 m5 offset-m1">
                        <OratorList />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      assessments: state.assessment.assessments
    }
  }
  
export default connect(mapStateToProps)(Dashboard)
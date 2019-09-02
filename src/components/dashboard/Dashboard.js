import React, { Component } from 'react';
import { connect } from 'react-redux'
import CoachView from './CoachView';
import FamilyView from './FamilyView'

class Dashboard extends Component {
    render() {
        const { profile } = this.props
        
        return (
            <div className="dashboard container">
                    {profile.isCoach ? 
                         <CoachView />
                        : 
                        <FamilyView />
                    }
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
    }
}

export default connect(mapStateToProps)(Dashboard)


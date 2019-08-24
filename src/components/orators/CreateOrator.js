import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createOrator } from '../../store/actions/oratorActions'
import { Redirect } from 'react-router-dom'

class CreateOrator extends Component {
    state = {
        firstName: '',
        lastName: '',
        dateOfBirth:'',
        chapter_id: 1,
        family_id: 3
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createOrator(this.state)
    }
    render() {
        const { auth } = this.props
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Register Orator</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <h6>Date of Birth</h6>
                        <input type="date" id="dateOfBirth" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn deep-purple lighten-1 z-depth-0">Register Orator</button>
                    </div>
                </form>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createOrator: (orator) => {
            dispatch(createOrator(orator))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrator);

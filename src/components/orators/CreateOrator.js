import React, { Component } from 'react';

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
        console.log(this.state)
    }
    render() {
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
                        <button className="btn pink lighten-1 z-depth-0">Register Orator</button>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default CreateOrator;
import React, { Component } from 'react';
import { Select } from 'react-materialize';

class CreateAssessment extends Component {
    state = {
        orator:'Ssanyu Lukoma',
        projection_rating: '',
        date:Date.now()
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
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
                    <h5 className="grey-text text-darken-3">Create Assessment for {this.state.orator}</h5>
                    {Date()}
                    <div className="input-field col s12">
                    
                        <Select type="select" id="projection_rating" value={this.state.projection_rating} onChange={this.handleChange}>
                            <option value="" disabled>
                                Voice Projection : Select a rating
                            </option>
                            <option value="1">
                                Voice Projection : 1
                            </option>
                            <option value="2">
                            Voice Projection : 2
                            </option>
                            <option value="3">
                            Voice Projection : 3
                            </option>
                            <option value="4">
                            Voice Projection : 4
                            </option>
                            <option value="5">
                            Voice Projection : 5
                            </option>
                        </Select>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default CreateAssessment;
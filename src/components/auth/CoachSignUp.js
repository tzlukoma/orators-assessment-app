import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { coachSignUp } from '../../store/actions/authActions'

import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate', id: 1234 },
  { value: 'strawberry', label: 'Strawberry', id: 6789 },
  { value: 'vanilla', label: 'Vanilla', id: 101112 }
]


class CoachSignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        chapter:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    handleOptionsChange = chapter => {
        this.setState({ chapter: chapter.id });
        console.log(`Option selected:`, chapter);
      };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        // this.props.coachSignUp(this.state)
    }
    render() {
        const { auth, authError } = this.props
        const { chapter } = this.state
        if (auth.uid) return <Redirect to='/' />
        return (

            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>

                    <Select style={{height:10}}
                    
    defaultValue={'Select an option'}
    value={chapter}
    options={options}
    onChange={this.handleOptionsChange}
    
  />

                    <div className="input-field">
                        <button className="btn deep-purple lighten-1 z-depth-0">Sign Up</button>
                        <div className="red-text center">
                            { authError ? <p>{authError}</p>: null}
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        coachSignUp: (newUser) => dispatch(coachSignUp(newUser))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoachSignUp);
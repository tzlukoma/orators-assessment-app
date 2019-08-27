import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { coachSignUp } from '../../store/actions/authActions'

import Select from 'react-select'
import chapters from '../../_ref/chapters'

const options = chapters


class CoachSignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        chapter: '',
        chapter_id: '',
        coach: true
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    handleOptionsChange = chapter => {
        this.setState({ 
            chapter_id: chapter.id,
            chapter: chapter.value
         });
        console.log(`Option selected:`, chapter);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.coachSignUp(this.state);
    }
    render() {
        const { auth, authError } = this.props
        if (auth.uid) return <Redirect to='/coachwelcome'/>
        return (

            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Chapter Coach Sign Up</h5>
                    <h6 className="pink lighten-5" style={{padding:10}}>This form is a sign up for chapter coaches
                        If you are a parent or guardian of an orator, please sign up 
                        <Link to="/signup"> here</Link>.
                    </h6>
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
                    <h6>Select your chapter:</h6>
                    <Select

                        defaultValue={'Select an option'}
                        value={this.state.value}
                        options={options}
                        onChange={this.handleOptionsChange}
                        hideSelectedOptions={false}

                    />
                   

                    <div className="input-field">
                        <button className="btn deep-purple lighten-1 z-depth-0">Sign Up</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
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
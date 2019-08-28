import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'
import { compose } from 'redux'

import { Field, reduxForm } from 'redux-form'

import * as ROUTES from '../../constants/routes'

import chapters from '../../_ref/chapters'



class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        chapter_id: '',
        chapter: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    handleChapterChange = (e) => {
        const userChapter = e.target.value && chapters.find(x => x.id === e.target.value)
            ? chapters.find(x => x.id === e.target.value)
            : { chapter_id: '', chapter: '' };

        this.setState({
            chapter_id: userChapter.id,
            chapter: userChapter.value
        })

    }

    onSubmit = (e) => {
        // e.preventDefault();
        console.log(e)
        this.props.signUp(e)
    }

    renderInputField(field) {
        const className = `form-input ${field.meta.touched && field.meta.error ? 'pink lighten-5' : ''}`

        return (
            <div className={className}>
                <label htmlFor={field.name}>{field.myLabel}</label>
                <input type={field.type} {...field.input}></input>
                <div className="pink-text center">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }

    render() {
        const { auth, authError } = this.props
        if (auth.uid) return <Redirect to={ROUTES.DASHBOARD} />
        return (

            <div className="container">

                <form onSubmit={this.props.handleSubmit((event) => this.onSubmit(event))}>

                    <Field
                        myLabel="First Name"
                        placeholder="Enter your first name"
                        type="text"
                        name="firstName"
                        component={this.renderInputField}
                    />
                    <Field
                        myLabel="Last Name"
                        name="lastName"
                        type="text"
                        component={this.renderInputField}
                    />
                    <Field
                        myLabel="Email"
                        name="email"
                        type="email"
                        component={this.renderInputField}
                    />
                    <Field
                        myLabel="Password"
                        name="password"
                        type="password"
                        component={this.renderInputField}
                    />
                    <p className="blue lighten-5" style={{ padding: 10 }}>Please enter the Chapter code you were provided below:</p>
                    <Field
                        myLabel="Chapter Code"
                        name="chapter_id"
                        type="text"
                        component={this.renderInputField}
                    />
                    <div className="input-field">
                        <div className="red-text center">
                            {authError ? <p className="pink-text">{authError}</p> : null}
                        </div>
                        <button className="btn deep-purple lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>

                {/* <form onSubmit={this.handleSubmit} className="white">
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
                    <p className="blue lighten-5" style={{padding: 10}}>Please enter the Chapter code you were provided below:</p>
                    <div className="input-field">
                        <label htmlFor="chapter_id">Chapter Code</label>
                        <input type="text" id="chapter_id" onChange={this.handleChapterChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn deep-purple lighten-1 z-depth-0">Sign Up</button>
                        <div className="red-text center">
                            { authError ? <p>{authError}</p>: null}
                        </div>
                    </div>
                </form> */}
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
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

function validate(values) {
    const errors = {};
    const isValidChapter = chapters.find(x => x.id === values.chapter_id)

    if (!values.firstName) {
        errors.firstName = "The first name is empty"
    }
    if (!values.lastName) {
        errors.lastName = "The last name is empty"
    }
    if (!values.email) {
        errors.email = "The email is empty"
    }
    // if(!values.password){
    //     errors.password = "The password is empty"
    // }
    if (!values.chapter_id) {
        errors.chapter_id = "The chapter code is empty"
    } else if (!isValidChapter) {
        errors.chapter_id = "This is not a valid chapter code"
    }

    return errors;
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        validate,
        form: 'signUpDetails'
    })
)(SignUp)

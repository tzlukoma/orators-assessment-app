import React, { Component } from 'react';
import { connect } from 'react-redux'
import { resetPassword } from '../../store/actions/authActions'
import { compose } from 'redux'

import { Field, reduxForm } from 'redux-form'






class ResetPassword extends Component {
    state = {
        emailSent: false
    }
    onSubmit = (e) => {
        this.props.resetPassword(e.email)
        this.setState({
            emailSent: true
        })
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
        const { authError } = this.props
        return (

            <div className="container">
                <form onSubmit={this.props.handleSubmit((event) => this.onSubmit(event))}>
                            <h6 className="pink lighten-5" style={{ padding: 10 }}>Enter your email address to reset your password</h6>
                            <Field
                                myLabel="Email"
                                name="email"
                                type="email"
                                component={this.renderInputField}
                            />
                            <div className="input-field">
                                <div className="red-text center">
                                    {authError ? <p className="pink-text">{authError}</p> : null}
                                    {!authError && this.state.emailSent ? <p className="green-text">Reset Email Sent</p> : null }
                                </div>
                                <button className="btn deep-purple lighten-1 z-depth-0">Submit</button>
                            </div>
                        </form>
            </div>

        );
    }
}

const mapStateToProps = (state) => {

    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetPassword: (user) => dispatch(resetPassword(user)),
    }
}

function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = "The email is empty"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "This is not a valid email address"
    }

    return errors;
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        validate,
        form: 'resetPasswordDetails'
    })
)(ResetPassword)

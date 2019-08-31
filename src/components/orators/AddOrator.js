import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addOrator } from '../../store/actions/oratorActions'
import { compose } from 'redux'

import { Field, reduxForm } from 'redux-form'


class AddOrator extends Component {

    state = {
        formSubmitted: false
    }


    onButtonClick = () => {
        this.setState({
            formSubmitted: true
        })
    }

    onSubmit = (e, parent_id, firstName, lastName, chapter_id, chapter, isLoading) => {
        console.log(this.state.isLoading)
        e.parent_id = parent_id;
        e.parentName = firstName+' '+lastName
        e.chapter_id = chapter_id;
        e.chapter = chapter
        // console.log(e)
        this.props.addOrator(e)
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
        const { auth, profile, authError, isLoading, submitting } = this.props
        console.log('redux submitting:', submitting)
        console.log('form submitted:', this.state.formSubmitted)
        console.log(this.props.anyTouched)


        return (

            <div className="container">

                <form onSubmit={this.props.handleSubmit((event) => this.onSubmit(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, profile.chapter, isLoading))}>

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
                        myLabel="Birth Date"
                        name="dateOfBirth"
                        type="date"
                        component={this.renderInputField}
                    />
                    <div className="input-field">
                        <div className="red-text center">
                            {authError ? <p className="pink-text">{authError}</p> : null}
                        </div>
                        {this.state.formSubmitted && this.props.submitSucceeded
                            ? <button className="btn deep-purple lighten-1 z-depth-0">Submitting ...</button>
                            : <button onClick={this.onButtonClick} className="btn deep-purple lighten-1 z-depth-0">Add Orator</button>
                        }
                    </div>
                </form>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
        profile: state.firebase.profile,
        isLoading: state.orator.isLoading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addOrator: (orator) => {
            dispatch(addOrator(orator))
        }
    }
}

function validate(values) {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = "The first name is empty"
    }
    if (!values.lastName) {
        errors.lastName = "The last name is empty"
    }
    if (!values.dateOfBirth) {
        errors.dateOfBirth = "The birth date is empty"
    } else if (!/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i.test(values.dateOfBirth)) {
        errors.dateOfBirth = "This date is not valid"
    }

    return errors;
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        validate,
        form: 'addOratorDetails'
    })
)(AddOrator)


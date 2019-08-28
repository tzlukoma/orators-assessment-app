import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addOrator } from '../../store/actions/oratorActions'
import { compose } from 'redux'

import { Field, reduxForm } from 'redux-form'


class AddOrator extends Component {

    onSubmit = (e, parent_id, chapter_id, chapter) => {
        e.parent_id = parent_id;
        e.chapter_id = chapter_id;
        e.chapter = chapter
        console.log(e)
        // this.props.addOrator(e)
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
        const { auth, profile, authError } = this.props
        // console.log(auth)
        // if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />
        return (

            <div className="container">

                <form onSubmit={this.props.handleSubmit((event) => this.onSubmit(event, auth.uid, profile.chapter_id,profile.chapter))}>

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
                        <button className="btn deep-purple lighten-1 z-depth-0">Add Orator</button>
                    </div>
                </form>

                {/* <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add Orator</h5>
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
                </form> */}
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
        profile: state.firebase.profile
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
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
    if(!values.dateOfBirth){
        errors.dateOfBirth = "The birth date is empty"
    } else if(!/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i.test(values.dateOfBirth)){
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


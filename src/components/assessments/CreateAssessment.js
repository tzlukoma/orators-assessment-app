import React, { Component } from 'react';
import moment from 'moment'
import { Select } from 'react-materialize';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { createAssessment } from '../../store/actions/assessmentActions'
import { Redirect } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

class CreateAssessment extends Component {
    state = {
        orator_id: this.props.match.params.id,
        firstName: '',
        lastName: '',
        vocabulary: '',
        filler_words: '',
        projection_volume: '',
        enunciation: '',
        eye_contact: '',
        posture: '',
        comment: '',
        remarks: ''
    }
    handleChange = (e, coach_id, coachFirstName, coachLastName, chapter_id, oratorFirstName, oratorLastName) => {
        console.log(oratorFirstName)
        this.setState({
            [e.target.id]: e.target.value,
            coach_id: coach_id,
            coachFirstName: coachFirstName,
            coachLastName: coachLastName,
            chapter_id: chapter_id,
            firstName: oratorFirstName,
            lastName: oratorLastName
        })


    }
    handleSubmit = (e, ) => {
        e.preventDefault();
        
        console.log(this.state)
        this.props.createAssessment(this.state)
        this.props.history.push(`${ROUTES.ORATOR}/${this.state.orator_id}}`)
    }
    render() {
        const { auth, orator, profile } = this.props
        console.log(this.props)
        if(!auth.uid) return <Redirect to={ROUTES.SIGN_IN}/>
        if(!orator) return <div></div>
        return (
            <div className="container" style={{ marginTop: -30, paddingBottom: 64 }}>
                
                <form onSubmit={(event) => this.handleSubmit(event)} className="form-input white" style={{paddingTop:'10px !important'}}>
                <h5 className="grey-text text-darken-3">{`New Assessment for ${orator.firstName} ${orator.lastName}`}</h5>
                {moment.utc(Date()).format("LLL")}
                    <div className="input-field col s12">
                        <h5>Ratings</h5>
                        <Select type="select" id="vocabulary" value={this.state.vocabulary} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.firstName,orator.lastName)}>
                            <option value="" disabled>
                                Word Choice / Vocabulary : Select a rating
                            </option>
                            <option value="1">
                                Word Choice / Vocabulary : 1
                            </option>
                            <option value="2">
                                Word Choice / Vocabulary : 2
                            </option>
                            <option value="3">
                                Word Choice / Vocabulary : 3
                            </option>
                            <option value="4">
                                Word Choice / Vocabulary : 4
                            </option>
                            <option value="5">
                                Word Choice / Vocabulary : 5
                            </option>
                        </Select>
                    </div>
                    <div className="input-field col s12">
                        <Select type="select" id="filler_words" value={this.state.filler_words} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.firstName,orator.lastName)}>
                            <option value="" disabled>
                                Filler Words : Select a rating
                            </option>
                            <option value="1">
                                Filler Words : 1
                            </option>
                            <option value="2">
                                Filler Words : 2
                            </option>
                            <option value="3">
                                Filler Words : 3
                            </option>
                            <option value="4">
                                Filler Words : 4
                            </option>
                            <option value="5">
                                Filler Words : 5
                            </option>
                        </Select>
                    </div>
                    <div className="input-field col s12">
                        <Select type="select" id="projection_volume" value={this.state.projection_volume} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.firstName,orator.lastName)}>
                            <option value="" disabled>
                                Projection & Volume : Select a rating
                            </option>
                            <option value="1">
                                Projection & Volume : 1
                            </option>
                            <option value="2">
                                Projection & Volume : 2
                            </option>
                            <option value="3">
                                Projection & Volume : 3
                            </option>
                            <option value="4">
                                Projection & Volume : 4
                            </option>
                            <option value="5">
                                Projection & Volume : 5
                            </option>
                        </Select>
                    </div>
                    <div className="input-field col s12">
                        <Select type="select" id="enunciation" value={this.state.enunciation} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.firstName,orator.lastName)}>
                            <option value="" disabled>
                                Enunciation : Select a rating
                            </option>
                            <option value="1">
                                Enunciation : 1
                            </option>
                            <option value="2">
                                Enunciation : 2
                            </option>
                            <option value="3">
                                Enunciation : 3
                            </option>
                            <option value="4">
                                Enunciation : 4
                            </option>
                            <option value="5">
                                Enunciation : 5
                            </option>
                        </Select>
                    </div>
                    <div className="input-field col s12">
                        <Select type="select" id="eye_contact" value={this.state.eye_contact} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.firstName,orator.lastName)}>
                            <option value="" disabled>
                                Eye Contact : Select a rating
                            </option>
                            <option value="1">
                                Eye Contact : 1
                            </option>
                            <option value="2">
                                Eye Contact : 2
                            </option>
                            <option value="3">
                                Eye Contact : 3
                            </option>
                            <option value="4">
                                Eye Contact : 4
                            </option>
                            <option value="5">
                                Eye Contact : 5
                            </option>
                        </Select>
                    </div>
                    <div className="input-field col s12">
                        <Select type="select" id="posture" value={this.state.posture} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.firstName,orator.lastName)}>
                            <option value="" disabled>
                                Posture : Select a rating
                            </option>
                            <option value="1">
                                Posture : 1
                            </option>
                            <option value="2">
                                Posture : 2
                            </option>
                            <option value="3">
                                Posture : 3
                            </option>
                            <option value="4">
                                Posture : 4
                            </option>
                            <option value="5">
                                Posture : 5
                            </option>
                        </Select>
                    </div>
                    <div className="input-field col s12">
                        <Select type="select" id="comment" value={this.state.comment} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.firstName,orator.lastName)}>
                            <option value="" disabled>
                                Comment : Select a comment
                            </option>
                            <option value="Excellent engagement, effort and participation">
                                Excellent engagement, effort and participation
                            </option>
                            <option value="Be sure to incorporate feedback you have been given.">
                                Be sure to incorporate feedback you have been given.
                            </option>
                            <option value="Engage more with the lesson so that you can improve">
                                Engage more with the lesson so that you can improve
                            </option>
                            <option value="Well done!">
                                Well done!
                            </option>
                            <option value="Nice improvement!">
                                Nice improvement!
                            </option>
                            <option value="Be sure to practice more.  You will improve.">
                                Be sure to practice more.  You will improve.
                            </option>
                            <option value="I see that you have been practicing.  Well done!">
                                I see that you have been practicing.  Well done!
                            </option>
                            <option value="More focus and effort will give you better results.">
                                More focus and effort will give you better results.
                            </option>
                        </Select>
                    </div>
                    <div className="input-field">
                        <textarea id="remarks" className="materialize-textarea" onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.firstName,orator.lastName)}></textarea>
                        <label htmlFor="remarks">Additional Remarks</label>
                    </div>
                    <div className="input-field">
                        <button className="btn deep-purple lighten-1 z-depth-0">Submit Assessment</button>
                    </div>
                </form>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    const id = ownProps.match.params.id
    const orators = state.firestore.data.orators
    const orator = orators ? orators[id] : null
    return {
        orator: orator,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createAssessment: (assessment) => {
            dispatch(createAssessment(assessment))
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'orators' }
    ])
)(CreateAssessment);
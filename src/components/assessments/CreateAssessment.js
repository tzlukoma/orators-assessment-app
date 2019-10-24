import React, { Component } from 'react';
import moment from 'moment'
import { Select } from 'react-materialize';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { createAssessment } from '../../store/actions/assessmentActions'
import { Link, Redirect } from 'react-router-dom'

import firebase from '../../config/fbConfig';

import * as ROUTES from '../../constants/routes'

const storageRef = firebase.storage().ref();

class CreateAssessment extends Component {
    state = {
        orator_id: '',
        parent_email: '',
        firstName: '',
        lastName: '',
        vocabulary: '',
        filler_words: '',
        content: '',
        projection_volume: '',
        enunciation: '',
        eye_contact: '',
        posture: '',
        comment: '',
        remarks: '',
        attachmentURL: '',
        attachment: null,
        attachmentName: '',
        progress: 0
    }
    handleChange = (e, coach_id, coachFirstName, coachLastName, chapter_id, oratorID, oratorFirstName, oratorLastName, oratorParentEmail) => {
        this.setState({
            [e.target.id]: e.target.value,
            coach_id: coach_id,
            coachFirstName: coachFirstName,
            coachLastName: coachLastName,
            chapter_id: chapter_id,
            orator_id: oratorID,
            parent_email: oratorParentEmail,
            firstName: oratorFirstName,
            lastName: oratorLastName
        })


    }
    handleFileChange = e => {
        e.stopPropagation();
        e.preventDefault()
        if (e.target.files[0]) {
            const attachment = e.target.files[0];
            this.setState(() => ({ attachment }));
        }
    }

    handleFileUpload = () => {
        const { attachment } = this.state;
        this.setState({attachmentName: attachment.name})
        const uploadTask = storageRef.child(`attachments/${attachment.name}`).put(attachment);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {
                // error function ....
                console.log(error);
            },
            () => {
                // complete function ....
                firebase.storage().ref('attachments').child(attachment.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ attachmentURL: url, attachment: 'uploaded' });
                })
            });
    }
    handleSubmit = (e, ) => {
        e.preventDefault();
        this.props.createAssessment(this.state)
        this.props.history.push('/')
    }
    render() {
        const { auth, orator, profile } = this.props
        if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />
        if (!orator) return <div></div>
        return (
            <div className="container" style={{ paddingBottom: 10 }}>
                <h5 className="grey-text text-darken-3">{`New Assessment for ${orator.firstName} ${orator.lastName}`}</h5>
                <p>{moment.utc(Date()).format("LLL")}</p>

                {!this.state.attachmentURL ?
                    <div className="pink lighten-5" style={{padding:10}}>
                        <p style={{margin:0}}>Upload an attachment for this assessment (optional)</p>
                        <progress value={this.state.progress} max="100" />
                        <br />
                        <input type="file" onChange={this.handleFileChange} />
                        <button onClick={this.handleFileUpload}>Upload</button>
                    </div>
                    :
                    <div className="pink lighten-5" style={{padding:10}}>
                        <a href={this.state.attachmentURL} target="_blank" rel="noopener noreferrer" >Attachment: {this.state.attachmentName}</a>
                    </div>
                }
                <form onSubmit={(event) => this.handleSubmit(event)} className="form-input white assessment" >
                    <div className="input-field col s12">
                        <h5>Ratings</h5>
                        <Select type="select" id="vocabulary" value={this.state.vocabulary} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.id, orator.firstName, orator.lastName, orator.parent_email)}>
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
                        <Select type="select" id="filler_words" value={this.state.filler_words} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.id, orator.firstName, orator.lastName, orator.parent_email)}>
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
                        <Select type="select" id="content" value={this.state.content} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.id, orator.firstName, orator.lastName, orator.parent_email)}>
                            <option value="" disabled>
                                Content : Select a rating
                            </option>
                            <option value="1">
                                Content : 1
                            </option>
                            <option value="2">
                                Content : 2
                            </option>
                            <option value="3">
                                Content : 3
                            </option>
                            <option value="4">
                                Content : 4
                            </option>
                            <option value="5">
                                Content : 5
                            </option>
                        </Select>
                    </div>
                    <div className="input-field col s12">
                        <Select type="select" id="projection_volume" value={this.state.projection_volume} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.id, orator.firstName, orator.lastName, orator.parent_email)}>
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
                        <Select type="select" id="enunciation" value={this.state.enunciation} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.id, orator.firstName, orator.lastName, orator.parent_email)}>
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
                        <Select type="select" id="eye_contact" value={this.state.eye_contact} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.id, orator.firstName, orator.lastName, orator.parent_email)}>
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
                        <Select type="select" id="posture" value={this.state.posture} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.id, orator.firstName, orator.lastName, orator.parent_email)}>
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
                        <Select type="select" id="comment" value={this.state.comment} onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.id, orator.firstName, orator.lastName, orator.parent_email)}>
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
                        <textarea id="remarks" className="materialize-textarea" onChange={(event) => this.handleChange(event, auth.uid, profile.firstName, profile.lastName, profile.chapter_id, orator.id, orator.firstName, orator.lastName, orator.parent_email)}></textarea>
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
    console.log('createAssessment:', ownProps)
    const id = ownProps.match.params.id
    const orators = state.firestore.data.orators
    const orator = orators ? orators[id] : []
    orator['id'] = id
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
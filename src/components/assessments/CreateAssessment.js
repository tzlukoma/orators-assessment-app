import React, { Component } from 'react';
import moment from 'moment'
import { Select } from 'react-materialize';
import { connect } from 'react-redux'
import { createAssessment } from '../../store/actions/assessmentActions'

class CreateAssessment extends Component {
    state = {
        orator_id: 3,
        firstname: 'Ssanyu',
        lastname: 'Lukoma',
        projection_rating: '',
        tone_rating: '',
        poise_rating: '',
        focus_rating: '',
        presentation_rating: '',
        comment: '',
        remarks: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })


    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createAssessment(this.state)
    }
    render() {
        
        return (

            <div className="container" style={{ paddingBottom: 64 }}>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">{`New Assessment for ${this.state.firstname} ${this.state.lastname}`}</h5>
                    {moment.utc(Date()).format("LLL")}
                    <div className="input-field col s12">
                        <h5>Ratings</h5>
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
                    <div className="input-field col s12">
                        <Select type="select" id="tone_rating" value={this.state.tone_rating} onChange={this.handleChange}>
                            <option value="" disabled>
                                Voice / Tone Variation : Select a rating
                            </option>
                            <option value="1">
                                Voice / Tone Variation : 1
                            </option>
                            <option value="2">
                                Voice / Tone Variation : 2
                            </option>
                            <option value="3">
                                Voice / Tone Variation : 3
                            </option>
                            <option value="4">
                                Voice / Tone Variation : 4
                            </option>
                            <option value="5">
                                Voice / Tone Variation : 5
                            </option>
                        </Select>
                    </div>
                    <div className="input-field col s12">
                        <Select type="select" id="poise_rating" value={this.state.poise_rating} onChange={this.handleChange}>
                            <option value="" disabled>
                                Poise / Posture : Select a rating
                            </option>
                            <option value="1">
                                Poise / Posture : 1
                            </option>
                            <option value="2">
                                Poise / Posture : 2
                            </option>
                            <option value="3">
                                Poise / Posture : 3
                            </option>
                            <option value="4">
                                Poise / Posture : 4
                            </option>
                            <option value="5">
                                Poise / Posture : 5
                            </option>
                        </Select>
                    </div>
                    <div className="input-field col s12">
                        <Select type="select" id="focus_rating" value={this.state.focus_rating} onChange={this.handleChange}>
                            <option value="" disabled>
                                Focus / Coachability : Select a rating
                            </option>
                            <option value="1">
                                Focus / Coachability : 1
                            </option>
                            <option value="2">
                                Focus / Coachability : 2
                            </option>
                            <option value="3">
                                Focus / Coachability : 3
                            </option>
                            <option value="4">
                                Focus / Coachability : 4
                            </option>
                            <option value="5">
                                Focus / Coachability : 5
                            </option>
                        </Select>
                    </div>
                    <div className="input-field col s12">
                        <Select type="select" id="presentation_rating" value={this.state.presentation_rating} onChange={this.handleChange}>
                            <option value="" disabled>
                                Presentation Style : Select a rating
                            </option>
                            <option value="1">
                                Presentation Style : 1
                            </option>
                            <option value="2">
                                Presentation Style : 2
                            </option>
                            <option value="3">
                                Presentation Style : 3
                            </option>
                            <option value="4">
                                Presentation Style : 4
                            </option>
                            <option value="5">
                                Presentation Style : 5
                            </option>
                        </Select>
                    </div>
                    <div className="input-field col s12">
                        <Select type="select" id="comment" value={this.state.comment} onChange={this.handleChange}>
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
                        <textarea id="remarks" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="remarks">Additional Remarks</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Submit Assessment</button>
                    </div>
                </form>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createAssessment: (assessment) => {
            dispatch(createAssessment(assessment))
        }
    }
}

export default connect(null, mapDispatchToProps)(CreateAssessment);
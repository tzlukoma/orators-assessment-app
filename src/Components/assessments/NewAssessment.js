import React, { Component } from 'react';
import moment from 'moment'
import FormFields from '../../ui/forms/FormFields'
import FormLabel from '@material-ui/core/FormLabel'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import FormGroup from '@material-ui/core/FormGroup'
import StarRatingComponent from 'react-star-rating-component';
import uuidv4 from 'uuid'


class NewAssessment extends Component {
    
    constructor(props) {
        super(props);
        
    
        this.state = {
            isLoading: false,
            isAuthenticated: false,
            oratorID: parseInt(this.props.match.params.orator_id),
            firstname: this.props.match.params.firstname,
            lastname: this.props.match.params.lastname,
            projection_rating: 0,
            tone_rating:0,
            poise_rating:0,
            focus_rating:0,
            presentation_rating:0,
            // comment:'',
            
            formData: {
                comment:{
                    element:'radio',
                    value:'',
                    label: false,
                    labelText:'Select a comment',
                    config:{
                        name:'comment_input',
                        options:[
                                {val:'Excellent engagement, effort and participation', text:'Excellent engagement, effort and participation'},
                                {val:'Be sure to incorporate feedback you have been given.', text:'Be sure to incorporate feedback you have been given.'},
                                {val:'Engage more with the lesson so that you can improve', text:'Engage more with the lesson so that you can improve'},
                                {val:'Well done!', text:'Well done!'},
                                {val:'Nice improvement!', text:'Nice improvement!'},
                                {val:'Be sure to practice more.  You will improve.', text:'Be sure to practice more.  You will improve.'},
                                {val:'I see that you have been practicing.  Well done!', text:'I see that you have been practicing.  Well done!'},
                                {val:'More focus and effort will give you better results.', text:'More focus and effort will give you better results.'}

                        ]
                    }
                },
                remarks:{
                    element:'textarea',
                    value:'',
                    label: true,
                    labelText:'Additional Remarks',
                    config:{
                        name:'remarks_input',
                        placeholder:'Enter your additional remarks here',
                        multiline:true,
                        rows:4,
                        rowsMax:6
                    }
                }
            }
        };
      }
    
    
    
    onProjectionStarClick(nextValue, prevValue, name) {
        this.setState({projection_rating: nextValue});
      }

    onToneStarClick(nextValue, prevValue, name) {
        this.setState({tone_rating: nextValue});
      }
    onPoiseStarClick(nextValue, prevValue, name) {
    this.setState({poise_rating: nextValue});
    }

    onFocusStarClick(nextValue, prevValue, name) {
        this.setState({focus_rating: nextValue});
        }

    onPresentationStarClick(nextValue, prevValue, name) {
    this.setState({presentation_rating: nextValue});
    }

    updateForm = (newState) => {
        this.setState({
            formData: newState
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {
            assessment_id: uuidv4(),
            orator_id:this.state.oratorID,
            coach_id:3, //coach_id will need to come from authentication
            projection_rating:this.state.projection_rating,
            tone_rating:this.state.tone_rating,
            poise_rating:this.state.poise_rating,
            focus_rating:this.state.focus_rating,
            presentation_rating:this.state.presentation_rating
        };

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value
        }

        console.log(dataToSubmit)
    }

    render() {
        const { projection_rating, tone_rating, poise_rating, focus_rating, presentation_rating, comment } = this.state;
        return (
            <div>
                <Container style={{paddingTop:64}}>
                    {/* <Link to={`/orator_view/${this.state.oratorID}/${this.state.lastname}/${this.state.firstname}/yes`}>Back to Profile</Link> */}
                    <Paper style={{padding:20, marginTop:20}} >
                        <Typography variant="h5" component="h3">
                        <span>{`${this.state.firstname} ${this.state.lastname}`} </span>
                        <span style={{fontSize:15, fontStyle:'italic'}}>- New Assessment</span>
                        </Typography>
                        <Typography>
                            {moment(Date.now()).format("LLL")} 
                        </Typography>
                    </Paper>
                </Container>
                <Container style={{textAlign:'center',marginTop:20, paddingBottom:64}}>
                    <form onSubmit={this.submitForm}>
                    <FormGroup>
                            <FormLabel style={{fontSize:18}}><span>Voice Projection ({this.state.projection_rating}/5)</span></FormLabel>
                            <div style={{marginTop:5}}>
                                <StarRatingComponent 
                                    name="projection_rating" 
                                    starCount={5}
                                    value={projection_rating}
                                    renderStarIcon={() => <div style={{margin:5,fontSize:50, align:'center'}}>■</div>}
                                    starColor={'orange'}
                                    emptyStarColor={'grey'}
                                    onStarClick={this.onProjectionStarClick.bind(this)}
                                />
                            </div> 
                        </FormGroup>
                        <FormGroup style={{marginTop:10}}>
                            <FormLabel style={{fontSize:20}}>Voice Tone / Variation ({this.state.tone_rating}/5)</FormLabel>
                            <div style={{marginTop:5}}>
                                <StarRatingComponent 
                                name="tone_rating" 
                                starCount={5}
                                value={tone_rating}
                                renderStarIcon={() => <div style={{margin:5,fontSize:50}}>■</div>}
                                starColor={'orange'}
                                emptyStarColor={'grey'}
                                onStarClick={this.onToneStarClick.bind(this)}
                                />
                            </div>
                        </FormGroup>
                        <FormGroup style={{marginTop:10}}>
                            <FormLabel style={{fontSize:20}}>Poise / Posture ({this.state.poise_rating}/5)</FormLabel>
                            <div style={{marginTop:5}}>
                                <StarRatingComponent 
                                name="poise_rating" 
                                starCount={5}
                                value={poise_rating}
                                renderStarIcon={() => <div style={{margin:5,fontSize:50}}>■</div>}
                                starColor={'orange'}
                                emptyStarColor={'grey'}
                                onStarClick={this.onPoiseStarClick.bind(this)}
                                />
                            </div>
                        </FormGroup>
                        <FormGroup style={{marginTop:10}}>
                            <FormLabel style={{fontSize:15}}>Focus / Coachability ({this.state.focus_rating}/5)</FormLabel>
                            <div style={{marginTop:5}}>
                                <StarRatingComponent 
                                name="focus_rating" 
                                starCount={5}
                                value={focus_rating}
                                renderStarIcon={() => <div style={{margin:5,fontSize:50}}>■</div>}
                                starColor={'orange'}
                                emptyStarColor={'grey'}
                                onStarClick={this.onFocusStarClick.bind(this)}
                                />
                            </div>
                        </FormGroup>
                        <FormGroup style={{marginTop:10}}>
                            <FormLabel style={{fontSize:20, height:14}}>Presentation Style ({this.state.presentation_rating}/5)</FormLabel>
                            <div style={{marginTop:5}}>
                                <StarRatingComponent 
                                name="presentation_rating" 
                                starCount={5}
                                value={presentation_rating}
                                renderStarIcon={() => <div style={{margin:5,fontSize:50}}>■</div>}
                                starColor={'orange'}
                                emptyStarColor={'grey'}
                                onStarClick={this.onPresentationStarClick.bind(this)}
                                />
                            </div>
                        </FormGroup>
                        <Container style={{textAlign:'left', marginTop:10}}>
                            <FormLabel style={{fontSize:18, height:14}}>Select a comment:</FormLabel>
                            <FormFields 
                                formData={this.state.formData}
                                change={(newState) => this.updateForm(newState)}
                            />
                            <Button type="submit" variant="contained" color="primary"style={{textAlign: 'center', marginTop: 30}}>Submit Assessment</Button>
                        </Container>
                        
                    </form>
                </Container>
            </div>
            
           
         
        );
    }
}

export default NewAssessment;
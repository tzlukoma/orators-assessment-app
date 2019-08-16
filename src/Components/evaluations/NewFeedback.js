import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import moment from 'moment'
import FormFields from '../../ui/forms/FormFields'
import FormLabel from '@material-ui/core/FormLabel'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import FormGroup from '@material-ui/core/FormGroup'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarRatingComponent from 'react-star-rating-component';
// import StarRating from 'react-star-rating';


class NewFeedback extends Component {
    
    constructor(props) {
        super(props);
        
    
        this.state = {
            isLoading: false,
            isAuthenticated: false,
            oratorID: this.props.match.params.orator_id,
            firstname: this.props.match.params.firstname,
            lastname: this.props.match.params.lastname,
            projection_rating: '',
            tone_rating:'',
            poise_rating:'',
            focus_rating:'',
            presentation_rating:'',
            
            formData: {
                comment:{
                    element:'input',
                    value:'',
                    label: true,
                    labelText:'Comment',
                    config:{
                        name:'lastname_input',
                        type:'textarea',
                        placeholder:'Enter your comment here',
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
        const { projection_rating, tone_rating, poise_rating, focus_rating, presentation_rating } = this.state;
        return (
            <Container className="container" style={{paddingTop:64, paddingBottom:64}}>
                {/* <Link to={`/orator_view/${this.state.oratorID}/${this.state.lastname}/${this.state.firstname}/yes`}>Back to Profile</Link> */}
                <Paper style={{padding:20, marginTop:20}} >
                    <Typography variant="h5" component="h3">
                       <span>{`${this.state.firstname} ${this.state.lastname}`} </span>
                       <span style={{fontSize:15, fontStyle:'italic'}}>- New Feedback</span>
                    </Typography>
                    <Typography>
                        {moment(Date.now()).format("LLL")} 
                    </Typography>
                </Paper>

                <form onSubmit={this.submitForm} style={{marginTop:30}}>
                <FormGroup>
                        <FormLabel style={{fontSize:20}}>Voice Projection - {this.state.projection_rating}</FormLabel>
                        <div style={{marginTop:5}}>
                            <StarRatingComponent 
                                name="projection_rating" 
                                starCount={5}
                                value={projection_rating}
                                renderStarIcon={() => <div style={{margin:5,fontSize:60}}>■</div>}
                                starColor={'orange'}
                                emptyStarColor={'grey'}
                                onStarClick={this.onProjectionStarClick.bind(this)}
                            />
                        </div> 
                    </FormGroup>
                    <FormGroup style={{marginTop:10}}>
                        <FormLabel style={{fontSize:20}}>Voice Tone / Variation - {this.state.tone_rating}</FormLabel>
                        <div style={{marginTop:5}}>
                            <StarRatingComponent 
                            name="tone_rating" 
                            starCount={5}
                            value={tone_rating}
                            renderStarIcon={() => <div style={{margin:5,fontSize:60}}>■</div>}
                            starColor={'orange'}
                            emptyStarColor={'grey'}
                            onStarClick={this.onToneStarClick.bind(this)}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup style={{marginTop:10}}>
                        <FormLabel style={{fontSize:20}}>Poise / Posture - {this.state.poise_rating}</FormLabel>
                        <div style={{marginTop:5}}>
                            <StarRatingComponent 
                            name="poise_rating" 
                            starCount={5}
                            value={poise_rating}
                            renderStarIcon={() => <div style={{margin:5,fontSize:60}}>■</div>}
                            starColor={'orange'}
                            emptyStarColor={'grey'}
                            onStarClick={this.onPoiseStarClick.bind(this)}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup style={{marginTop:10}}>
                        <FormLabel style={{fontSize:20}}>Focus / Coachability - {this.state.focus_rating}</FormLabel>
                        <div style={{marginTop:5}}>
                            <StarRatingComponent 
                            name="focus_rating" 
                            starCount={5}
                            value={focus_rating}
                            renderStarIcon={() => <div style={{margin:5,fontSize:60}}>■</div>}
                            starColor={'orange'}
                            emptyStarColor={'grey'}
                            onStarClick={this.onFocusStarClick.bind(this)}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup style={{marginTop:10}}>
                        <FormLabel style={{fontSize:20, height:14}}>Presentation Style - {this.state.presentation_rating}</FormLabel>
                        <div style={{marginTop:5}}>
                            <StarRatingComponent 
                            name="presentation_rating" 
                            starCount={5}
                            value={presentation_rating}
                            renderStarIcon={() => <div style={{margin:5,fontSize:60}}>■</div>}
                            starColor={'orange'}
                            emptyStarColor={'grey'}
                            onStarClick={this.onPresentationStarClick.bind(this)}
                            />
                        </div>
                    </FormGroup>
                    <FormFields 
                        formData={this.state.formData}
                        change={(newState) => this.updateForm(newState)}
                    />
                    <Button type="submit" variant="contained" color="primary"style={{textAlign: 'center', marginTop: 30}}>Submit Feedback</Button>
                </form>
            </Container>
           
         
        );
    }
}

export default NewFeedback;
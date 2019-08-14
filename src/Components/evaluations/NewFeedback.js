import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'
import StarRatingComponent from 'react-star-rating-component';
import StarRating from 'react-star-rating';


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
                name:{
                    element:'input',
                    value:'',
                    label: true,
                    labelText:'Name',
                    config:{
                        name:'name_input',
                        type:'text',
                        placeholder:'Enter your name'
                    }
                },
                lastname:{
                    element:'input',
                    value:'',
                    label: true,
                    labelText:'Last Name',
                    config:{
                        name:'name_input',
                        type:'text',
                        placeholder:'Enter your name'
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

    render() {
        const { projection_rating, tone_rating, poise_rating, focus_rating, presentation_rating } = this.state;
        return (
            <Container className="container" style={{paddingTop:64}}>
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
                <form style={{marginTop:30}}>
                    <FormGroup>
                        <FormLabel style={{fontSize:20}}>Voice Projection - {this.state.projection_rating}</FormLabel>
                        <div style={{marginTop:5}}>
                            <StarRatingComponent 
                                name="projection_rating" 
                                starCount={5}
                                value={projection_rating}
                                renderStarIcon={() => <div style={{margin:10,fontSize:40}}>█</div>}
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
                            renderStarIcon={() => <div style={{margin:10,fontSize:40}}>█</div>}
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
                            renderStarIcon={() => <div style={{margin:10,fontSize:40}}>█</div>}
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
                            renderStarIcon={() => <div style={{margin:10,fontSize:40}}>█</div>}
                            starColor={'orange'}
                            emptyStarColor={'grey'}
                            onStarClick={this.onFocusStarClick.bind(this)}
                            />
                        </div>
                    </FormGroup>

                    <FormGroup style={{marginTop:10}}>
                        <FormLabel style={{fontSize:20}}>Presentation Style - {this.state.presentation_rating}</FormLabel>
                        <div style={{marginTop:5}}>
                            <StarRatingComponent 
                            name="presentation_rating" 
                            starCount={5}
                            value={presentation_rating}
                            renderStarIcon={() => <div style={{margin:10,fontSize:40}}>█</div>}
                            starColor={'orange'}
                            emptyStarColor={'grey'}
                            onStarClick={this.onPresentationStarClick.bind(this)}
                            />
                        </div>
                    </FormGroup>
                    
                    <Button color="primary" type="submit"variant="contained" style={{marginTop:20}} >Submit Feedback</Button>
                </form>
            </Container>
           
         
        );
    }
}

export default NewFeedback;
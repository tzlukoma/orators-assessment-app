import React from 'react';
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'


import Evaluations from '../evaluations'



const API = 'http://localhost:3002/';

class OratorView extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            isLoading: false,
            isAuthenticated: false,
            oratorID: this.props.match.params.orator_id,
            firstname: this.props.match.params.firstname,
            lastname: this.props.match.params.lastname,
            coachview: this.props.match.params.coachview,
            evaluations: [],
            coaches: []
        };
      }

    
      componentDidMount() {
        fetch(`${API}evaluations?${'orator_id'}=${this.state.oratorID}`) //${QUERY_FAMILY ? 'family_id':'chapter_id'}=${QUERY_ID}
          .then(response => response.json())
          .then(data => this.setState({ evaluations: data }));

          fetch(`${API}coaches`) //${QUERY_FAMILY ? 'family_id':'chapter_id'}=${QUERY_ID}
          .then(response => response.json())
          .then(data => this.setState({ coaches: data }));

          
      }



      
    
    render() {
        // console.log(this.state.evaluations)
        // console.log(this.props)
        //, borderBottom:'solid grey 1px'
        return (
            <Container className="container" style={{paddingTop:64}}>
                <Paper style={{padding:20, marginTop:20}} >
                    <Typography variant="h5" component="h3">
                        {`${this.state.firstname} ${this.state.lastname}`} 
                    </Typography>
                    <Typography variant="subtitle1">
                        {this.state.evaluations.length} Feedback Summaries
                    </Typography>
                    {this.state.coachview==='yes'?
                        <Link style={{textDecoration:'none'}}to={`/new_feedback/${this.state.oratorID}/${this.state.lastname}/${this.state.firstname}`}>
                            <Button color="primary" variant="contained" style={{marginTop:20}} >Add Feedback</Button>
                        </Link>
                        :''
                        }
                </Paper>
                <Evaluations evaluations={this.state.evaluations} coaches={this.state.coaches}{...this.props}/>
            </Container>
        );
    }
}

export default OratorView;
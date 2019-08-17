import React from 'react';
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'


import Assessments from '../assessments'



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
            assessments: [],
            coaches: []
        };
      }

    
      componentDidMount() {
        fetch(`${API}assessments?${'orator_id'}=${this.state.oratorID}`) //${QUERY_FAMILY ? 'family_id':'chapter_id'}=${QUERY_ID}
          .then(response => response.json())
          .then(data => this.setState({ assessments: data }));

          fetch(`${API}coaches`) //${QUERY_FAMILY ? 'family_id':'chapter_id'}=${QUERY_ID}
          .then(response => response.json())
          .then(data => this.setState({ coaches: data }));

          
      }

    
    render() {

        return (
            <Container className="container" style={{paddingTop:64}}>
                <Paper style={{padding:20, marginTop:20}} >
                    <Typography variant="h5" >
                        {`${this.state.firstname} ${this.state.lastname}`} 
                    </Typography>
                    <Typography variant="subtitle1">
                        {this.state.assessments.length} Assessment Summaries
                    </Typography>
                    {this.state.coachview==='yes'?
                        <Link style={{textDecoration:'none'}}to={`/new_assessment/${this.state.oratorID}/${this.state.lastname}/${this.state.firstname}`}>
                            <Button color="primary" variant="contained" style={{marginTop:20}} >Add Assessment</Button>
                        </Link>
                        :''
                        }
                </Paper>
                <Assessments assessments={this.state.assessments} coaches={this.state.coaches}{...this.props}/>
            </Container>
        );
    }
}

export default OratorView;
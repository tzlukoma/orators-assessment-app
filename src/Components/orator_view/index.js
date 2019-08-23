import React from './node_modules/react';
import Container from './node_modules/@material-ui/core/Container';
import Paper from './node_modules/@material-ui/core/Paper';
import Typography from './node_modules/@material-ui/core/Typography';
import Button from './node_modules/@material-ui/core/Button'


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
                        {this.state.evaluations.length} Evaluations
                    </Typography>
                    {this.state.coachview==='yes'?<Button variant="contained" style={{marginTop:20}}>Add Evaluation</Button>:''}
                </Paper>
                <Evaluations evaluations={this.state.evaluations} coaches={this.state.coaches}{...this.props}/>
            </Container>
        );
    }
}

export default OratorView;
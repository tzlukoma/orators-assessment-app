import React from 'react';
import OratorListItems from '../../../ui/misc/OratorsListItems';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const API = 'http://localhost:3002/';

class FamilyView extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            isLoading: false,
            isAuthenticated: false,
            familyID: this.props.match.params.family_id,
            familyname: '',
            orators: []
        };
      }

    
      componentDidMount() {
        this.setState({isLoading: true})

        fetch(`${API}orators?family_id=${this.state.familyID}`)
          .then(response => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error('Something went wrong ...');
            }
          })
          .then(data => this.setState({ orators: data, isLoading:false }))
          .catch(error => this.setState({ error, isLoading: false }));

        fetch(`${API}families?id=${this.state.familyID}`)
        .then(response => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then(data => {
            if(data.length === 0) {
                this.setState({familyname: 'No family found', isLoading:false})
            } else {
                this.setState({ familyname: data[0].family_name+' Family', isLoading:false})
            }
        });
      }
    
    render() {
        const {isLoading} = this.state
        if(isLoading) {
            return<p>Loading...</p>
        }
        return (
            <Container className="container" style={{paddingTop:60}}>
                <Paper style={{padding:20, marginTop:20}} >
                    <Typography variant="h5" component="h3">
                        {this.state.familyname}
                    </Typography>
                    <Typography variant="subtitle1">
                        {this.state.orators.length} Orators
                    </Typography>
                </Paper>
                
                <OratorListItems orators={this.state.orators}/>
            </Container>
        );
    }
}

export default FamilyView;
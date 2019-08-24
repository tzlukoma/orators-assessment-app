import React from 'react';
import OratorListItems from '../../../ui/misc/OratorsListItems';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const API = 'http://localhost:3002/';

class ChapterView extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            isLoading: false,
            error:null,
            isAuthenticated: false,
            chapterID: this.props.match.params.chapter_id,
            chaptername: '',
            orators: [],
            chapters: []
        };
      }

    
      componentDidMount() {
        this.setState({isLoading: true})

        fetch(`${API}orators?chapter_id=${this.state.chapterID}`)
          .then(response => {
              if(response.ok){
                  return response.json()
              } else {
                  throw new Error('Something went wrong ...');
              }
          })
          .then(data => this.setState({ orators: data, isLoading:false }))
          .catch(error => this.setState({ error, isLoading: false }));
          

        fetch(`${API}chapters?id=${this.state.chapterID}`)
        .then(response => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then(data => {
            if(data.length === 0) {
                this.setState({chaptername: 'No chapter found', isLoading:false})
            } else {
                this.setState({ chaptername: data[0].chapter_name, isLoading:false})
            }
        });
      }
    
    render() {
        const {isLoading, error} = this.state
        
        if (error) {
            return <p>{error.message}</p>;
          }

        if(isLoading) {
            return<p>Loading...</p>
        }
        return (
            <Container className="container" style={{paddingTop:60}}>
                <Paper style={{padding:20, marginTop:20}} >
                    <Typography variant="h5" component="h3">
                        {this.state.chaptername}
                    </Typography>
                    <Typography variant="subtitle1">
                        {this.state.orators.length} Orators
                    </Typography>
                </Paper>
                
                <OratorListItems orators={this.state.orators} isCoach={true}/>
            </Container>
        );
    }
}

export default ChapterView;
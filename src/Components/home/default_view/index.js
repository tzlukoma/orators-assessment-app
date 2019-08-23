import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom'
import Container from './node_modules/@material-ui/core/Container';
import Typography from './node_modules/@material-ui/core/Typography';
import Button from './node_modules/@material-ui/core/Button'
import Paper from './node_modules/@material-ui/core/Paper'

const DefaultView = () => {
    return (
        <div>
            <Container className="container" style={{paddingTop:60, textAlign:'center'}}>
                <Paper style={{padding:20, marginTop:20}} >
                    <Typography variant="h5" component="h3">
                        Welcome!
                    </Typography>
                    <Link to="/chapter_view/3" style={{textDecoration:'none'}}>
                        <Button variant="contained" color="primary" style={{margin:10}}>Coach View</Button>
                    </Link>
                    <Link to="/family_view/3" style={{textDecoration:'none'}}>
                        <Button variant="contained" color="primary" style={{margin:10}}>Family View</Button>
                    </Link>
                </Paper>
                
                
                

            </Container>
        </div>
    );
};

export default DefaultView;
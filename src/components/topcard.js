import React from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

const renderAdminView = (chapters,coaches,families,orators) => {
    return (
        <div>
            <Container
                    className='container'
                    style={{ paddingTop: 60}}
                >
                    <Paper style={{ padding: 20, marginTop: 20 }}>
                        <Typography variant='h5' component='h3'>
                            Welcome!
                        </Typography>
                        <Typography variant='subtitle1'>
                            {chapters} Chapters
                        </Typography>
                        <Typography variant='subtitle1'>
                            70 Coaches
                        </Typography>
                        <Typography variant='subtitle1'>
                            100 Families
                            180 Orators
                        </Typography>
                        <Typography variant='subtitle1'>
                            180 Orators
                        </Typography>
                    </Paper>
                    
                    
                </Container>
        </div>
    )
}
    

const TopCard = (props) => {
    const haveChapters = props.chapters && props.chapters.length > 0
    const haveCoaches = true;
    const haveFamilies = true;
    const haveOrators = true;

    return (
        <div>
            {haveChapters && haveCoaches && haveFamilies && haveOrators ? 
            renderAdminView(props.chapters.length)
            :null}
        </div>
        
    );
};

export default TopCard;
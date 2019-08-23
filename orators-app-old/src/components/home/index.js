import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import FamilyView from './family_view';
import ChapterView from './chapter_view';
import DefaultView from './default_view';
import Container from '@material-ui/core/Container'



const Home = (props) => {
    const familyregex = RegExp('family_view/*')
    const isFamily = familyregex.test(props.location.pathname);
    const chapterregex = RegExp('chapter_view/*')
    const isChapter = chapterregex.test(props.location.pathname);    
    
    return (
        <Container className="container" style={{paddingTop:60, textAlign:'center'}}>
            <Paper style={{padding:20, marginTop:20}} >
                    <Typography variant="h5" component="h3">
                        {   isFamily ? this.state.familyname: 
                            isChapter ? this.state.chaptername:
                            'Welcome!' }
                    </Typography>
                    <Typography variant="subtitle1">
                        {   isFamily || isChapter ? `${this.state.orators.length} Orators`:''} 
                    </Typography>
                </Paper>
            { isFamily ? <FamilyView {...props} />:
            isChapter ? <ChapterView {...props} />: <DefaultView />}
        </Container>
    );
};

export default Home;
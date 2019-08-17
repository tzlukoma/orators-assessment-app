import React from 'react';
import FamilyView from './family_view'
import ChapterView from './chapter_view'
import DefaultView from './default_view'
import Container from '@material-ui/core/Container'



const Home = (props) => {
    const familyregex = RegExp('family_view/*')
    const isFamily = familyregex.test(props.location.pathname);
    const chapterregex = RegExp('chapter_view/*')
    const isChapter = chapterregex.test(props.location.pathname);    
    
    return (
        <Container>
            { isFamily ? <FamilyView {...props} />:
            isChapter ? <ChapterView {...props} />: <DefaultView />}
        </Container>
    );
};

export default Home;
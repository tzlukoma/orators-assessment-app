import React from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

const renderCustomView = (usertype, haveChapters, haveCoaches, haveFamilies, haveOrators, props) => {
    const adminDataFetched = haveChapters && haveCoaches && haveFamilies && haveOrators
    const chapterCount = haveChapters ? props.chapters.length: null
    const coachesCount = haveCoaches ? props.coaches.length: null
    const familiesCount = haveFamilies ? props.families.length: null
    const oratorsCount = haveOrators ? 120: null
    const currentUser = usertype

    console.log(currentUser)

    switch (currentUser) {
        case ('admin'):
            if(adminDataFetched){
                return (
                    console.log(currentUser, chapterCount)
                )
            } else {
                return (
                    console.log('nothing yet')
                )
            }
            break;
        default:
            return (
                <div>

                </div>
            )
    }

}

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
                            {coaches} Coaches
                        </Typography>
                        <Typography variant='subtitle1'>
                            {families} Families
                        </Typography>
                        <Typography variant='subtitle1'>
                            {orators} Orators
                        </Typography>
                    </Paper>
                    
                    
                </Container>
        </div>
    )
}

const renderFamilyView = (families,orators)=>{
    return(
        <div style={{paddingTop:64}}>
            {families} Families
            {orators} Orators
        </div>
    )
}

    

const TopCard = (props) => {
    const admin = props.usertype === 'admin'? true: false
    const family = props.usertype === 'family' ? true: false
    const haveChapters = props.chapters && props.chapters.length > 0
    const haveCoaches = props.coaches && props.coaches.length > 0;
    const haveFamilies = props.families && props.families.length > 0;
    const haveOrators = props.orators && props.orators.length > 0;
    return (
        <div>
            {/* {renderCustomView(usertype, haveChapters, haveCoaches, haveFamilies, haveOrators, {...props})} */}
            {admin && haveChapters && haveCoaches && haveFamilies && haveOrators ? 
            renderAdminView(
                props.chapters.length,
                props.coaches.length,
                props.families.length,
                props.orators.length
                )
                :family && haveFamilies && haveOrators ? renderFamilyView(props.families.length,props.orators.length)
            :null}
        </div>
        
    );
};

export default TopCard;
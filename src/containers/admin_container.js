import React, { Component } from 'react';

import { connect } from 'react-redux';
import { chaptersListAll, coachesListAll, familiesListAll, oratorsListAll } from '../actions';
import { bindActionCreators } from 'redux'

import TopCard from '../components/topcard'

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'


class AdminContainer extends Component {
    
    componentDidMount(){
        this.props.chaptersListAll();
        this.props.coachesListAll();
        this.props.familiesListAll();
        this.props.oratorsListAll();

        //3_Request all families
        //4_Request all orators
    }
    
    
    render() {
       
        return (
            <div>
                <TopCard 
                    usertype={'admin'} 
                    chapters={this.props.chapters.chapterList}
                    coaches={this.props.coaches.coachList}
                    families={this.props.families.familyList}
                    orators={this.props.orators.oratorList}
                    />
                <Container>
                    <Paper style={{ padding: 20, marginTop: 20 }}>
                        <Typography variant='h5'>Test Views</Typography>
                        <ul>
                            <li>Perth Amboy Chapter (chapter_id:1)</li>
                            <li>Jones Family (family_id:1)</li>
                            <li>Smith Family (family_id:2)</li>
                            <li>Wilson Family (family_id:3)</li>
                            <li>Coach Carmelle Axp (coach_id:1)</li>
                        </ul>
                    </Paper>
                </Container>
                

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        chapters: state.chapters,
        coaches: state.coaches,
        families: state.families,
        orators: state.orators
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({chaptersListAll, coachesListAll, familiesListAll, oratorsListAll},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminContainer)
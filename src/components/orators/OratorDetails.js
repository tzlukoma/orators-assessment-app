import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link, Redirect } from 'react-router-dom'
import CreateAssessment from '../assessments/CreateAssessment'


import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import moment from 'moment'

import * as ROUTES from '../../constants/routes'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const OratorDetails = (props) => {
    console.log(props)
    const { orator, auth, profile } = props;


    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    if (!auth.uid) return <Redirect to={ROUTES.SIGN_IN} />
    if (orator) {
        return (
            <div className="container section asessment-details">
                <div className="card z-depth-1">
                    <div className="card-content" style={{paddingBottom: 10}}>
                        <span className="card-title">{orator.firstName} {orator.lastName}</span>
                        <p>{moment().diff(orator.dateOfBirth, 'years', false)} years old</p>
                    </div>
                    {
                        profile.isCoach ? 
                            <button onClick={handleClickOpen} className="btn blue lighten-2 z-depth-0" style={{ margin: '5px 10px 15px 20px' }} >
                                <i className="material-icons left">add</i>
                                Assess {orator.firstName}
                            </button>
                            : null
                    }
                    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                        <AppBar >
                            <Toolbar>
                                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                    <CloseIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <CreateAssessment {...props} handleClose={handleClose}/>
                    </Dialog>
                    <div className="card-action grey lighten-4 grey-text" style={{padding: '8px 10px', marginBottom:5}}>
                        <div>{orator.parentName}'s Family</div>
                        <div>{orator.chapter} Chapter</div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container center">
                <p>Loading assessment ...</p>
            </div>
        );
    }

};

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const id = ownProps.match.params.id
    const orators = state.firestore.data.orators
    const orator = orators ? orators[id] : null
    return {
        orator: orator,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'orators' }
    ])
)(OratorDetails);
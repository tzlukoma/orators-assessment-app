import React from 'react';
import moment from 'moment'

const OratorSummary = (props) => {
    
    const { firstName, lastName, dateOfBirth, parentName} = props.orator

    return (
        <div className={`${classes.card} orator-summary`}>
            <div className={classes.cardContent}>
                <span className={classes.cardTitle}>{firstName} {lastName}</span>
                <p>{moment().diff(dateOfBirth, 'years',false)} years old</p>
                <p className={classes.cardFooter}>{parentName}'s Family</p>
            </div>
        </div>
    );
};

const classes = {
	card: 'card z-depth-1',
	cardContent:'card-content grey-text text-darken-3',
	cardTitle: 'card-title',
	cardFooter: 'grey-text'

}

const styles = {
	card: {

	}
}

export default OratorSummary;
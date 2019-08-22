export const createAssessment = (assessment) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile
        const coach_id = getState().firebase.auth.uid;
        firestore.collection('assessments').add({
            ...assessment, 
            coachFirstName: profile.firstName,
            coachLastName: profile.lastName,
            coach_id: coach_id,
            createdAt: new Date()
        }).then(()=> {
            dispatch({type: 'CREATE_ASSESSMENT', assessment})
        }).catch((err)=> {
            dispatch({ type: 'CREATE_ASSESSMENT_ERROR', err})
        })
        
    }
}
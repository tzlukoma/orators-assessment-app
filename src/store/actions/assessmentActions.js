export const createAssessment = (assessment) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('assessments').add({
            ...assessment, 
            coachFirstName: 'Pam',
            coachLastName: 'Smith',
            coach_id: 3,
            createdAt: new Date()
        }).then(()=> {
            dispatch({type: 'CREATE_ASSESSMENT', assessment})
        }).catch((err)=> {
            dispatch({ type: 'CREATE_ASSESSMENT_ERROR', err})
        })
        
    }
}
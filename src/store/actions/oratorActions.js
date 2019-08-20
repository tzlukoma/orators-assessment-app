export const createOrator = (orator) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('orators').add({
            ...orator, 
            chapter_id: 3,
            family_id: 3,
            createdAt: new Date()
        }).then(()=> {
            dispatch({type: 'CREATE_ORATOR', orator})
        }).catch((err)=> {
            dispatch({ type: 'CREATE_ORATOR_ERROR', err})
        })
        
    }
}
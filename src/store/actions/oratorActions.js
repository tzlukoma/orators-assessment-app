import {
    ADD_ORATOR,
    ADD_ORATOR_ERROR
  } from '../actions/types'

export const addOrator = (orator) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('orators').add({
            ...orator, 
            chapter_id: 3,
            family_id: 3,
            createdAt: new Date()
        }).then(()=> {
            dispatch({type: ADD_ORATOR, orator})
        }).catch((err)=> {
            dispatch({ type: ADD_ORATOR_ERROR, err})
        })
        
    }
}
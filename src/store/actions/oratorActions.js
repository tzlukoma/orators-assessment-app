import {
    ADD_ORATOR,
    ADD_ORATOR_ERROR,
    ADD_ORATOR_SUCCESS
} from '../../constants/types'

export const addOrator = (orator) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database

        const firestore = getFirestore();
        firestore.collection('orators').add({
            ...orator,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: ADD_ORATOR, orator });
            dispatch({ type: ADD_ORATOR_SUCCESS})
        }).catch((err) => {
            dispatch({ type: ADD_ORATOR_ERROR, err })
        })

    }
}


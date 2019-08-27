import {
    ADD_ORATOR,
    ADD_ORATOR_ERROR,
    GET_CHAPTER_ORATORS,
    GET_CHAPTER_ORATORS_ERROR
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
        }).then(() => {
            dispatch({ type: ADD_ORATOR, orator })
        }).catch((err) => {
            dispatch({ type: ADD_ORATOR_ERROR, err })
        })

    }
}

export const getChapterOrators = (chapter_id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        // const orators = []
        
        try {
            const result = firestore.collection('orators').where("chapter_id", "==", chapter_id).get();
            let orators = result.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
            });
            dispatch( {  type: GET_CHAPTER_ORATORS, orators })
        }
        catch (err) {
            dispatch({ type: GET_CHAPTER_ORATORS_ERROR, err })
        }
        
        // firestore.collection('orators').where("chapter_id", "==", chapter_id).get()
        //     .then((result) => {
                
        //         let orators = result.docs.map(function (documentSnapshot) {
        //             return documentSnapshot.data();
        //         });
        //         console.log(orators);
        //         return orators
        //     }).then( )
        //     .catch((err) => {
        //         dispatch({ type: GET_CHAPTER_ORATORS_ERROR, err })

        //     })
    }
}
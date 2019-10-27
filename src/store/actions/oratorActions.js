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

export const addOratorWithId = (orator) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database

        const firestore = getFirestore();
        firestore.collection('orators').doc(orator.id).set({
            firstName: orator.firstName,
            lastName: orator.lastName,
            dateOfBirth: orator.dateOfBirth,
            age: orator.age,
            gender: orator.gender,
            chapter: orator.chapter,
            chapter_id: orator.chapter_id,
            chapter_membership_status: orator.chapter_membership_status,
            school: orator.school,
            dateJoined: orator.dateJoined,
            parentName: orator.parentName,
            grade: orator.grade,
            mobileNumber: orator.mobileNumber,
            homeNumber: orator.homeNumber,
            workNumber: orator.workNumber,
            region: orator.region,
            group: orator.group,
            streetAddress: orator.streetAddress,
            city: orator.city,
            state: orator.state,
            parentEmail: orator.parentEmail,
            postedBy: orator.postedBy,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: ADD_ORATOR, orator });
            dispatch({ type: ADD_ORATOR_SUCCESS})
        }).catch((err) => {
            dispatch({ type: ADD_ORATOR_ERROR, err })
        })

    }
}



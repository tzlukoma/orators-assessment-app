import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    SIGNOUT_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    COACH_SIGNUP_SUCCESS,
    COACH_SIGNUP_ERROR
} from '../actions/types'


export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch( { type: LOGIN_SUCCESS})
        }).catch((err) => {
            dispatch({ type: LOGIN_ERROR, err })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=> {
            dispatch({ type: SIGNOUT_SUCCESS})
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: SIGNUP_SUCCESS})
        }).catch(err => {
            dispatch({ type: SIGNUP_ERROR, err})
        })
    }
}

export const coachSignUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                chapter_id: newUser.chapter_id,
                coach: newUser.coach
            })
        }).then(() => {
            dispatch({ type: COACH_SIGNUP_SUCCESS})
        }).catch(err => {
            dispatch({ type: COACH_SIGNUP_ERROR, err})
        })
    }
}
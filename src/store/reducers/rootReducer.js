import authReducer from './authReducer'
import assessmentReducer from './assessmentReducer'
import oratorReducer from './oratorReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    assessment: assessmentReducer,
    orator: oratorReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer
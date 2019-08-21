import authReducer from './authReducer'
import assessmentReducer from './assessmentReducer'
import oratorReducer from './oratorReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    assessment: assessmentReducer,
    orator: oratorReducer,
    firestore: firestoreReducer
})

export default rootReducer
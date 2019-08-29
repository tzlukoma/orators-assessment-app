import authReducer from './authReducer'
import assessmentReducer from './assessmentReducer'
import oratorReducer from './oratorReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { reducer as formReducer } from 'redux-form'
import { ADD_ORATOR_SUCCESS } from '../../constants/types'

const rootReducer = combineReducers({
    auth: authReducer,
    assessment: assessmentReducer,
    orator: oratorReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    form: formReducer.plugin({
        addOratorDetails: (state, action) => {
            switch(action.type) {
                case ADD_ORATOR_SUCCESS:
                    return undefined
                default:
                    return state
            }
        }
    })
})

export default rootReducer
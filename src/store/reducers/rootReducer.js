import authReducer from './authReducer'
import assessmentReducer from './assessmentReducer'
import oratorReducer from './oratorReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    assessment: assessmentReducer,
    orator: oratorReducer
})

export default rootReducer
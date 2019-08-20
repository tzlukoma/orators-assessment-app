import authReducer from './authReducer'
import assessmentReducer from './assessmentReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    assessment: assessmentReducer
})

export default rootReducer
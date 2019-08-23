import { combineReducers } from 'redux';
import chapters from './inventory/chapter_reducer';
import coaches from './inventory/coach_reducer';
import families from './inventory/family_reducer';
import orators from './inventory/orator_reducer';
import assessments from './inventory/assessment_reducer'

const rootReducer = combineReducers({
    chapters, coaches, families, orators, assessments
})

export default rootReducer;
import {
  CREATE_ASSESSMENT,
  CREATE_ASSESSMENT_ERROR
} from '../../constants/types'

const initState = {}

const assessmentReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_ASSESSMENT:
      console.log('created assessment', action.assessment)
      return state;
    case CREATE_ASSESSMENT_ERROR:
      console.log('create assessment error', action.err);
      return state;
    default:
      return state;
  }
};

export default assessmentReducer;
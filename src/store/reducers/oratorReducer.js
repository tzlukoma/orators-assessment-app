import {
  ADD_ORATOR,
  ADD_ORATOR_ERROR
} from '../actions/types'

const initState = {
    
  }
  
  const oratorReducer = (state = initState, action) => {
    switch (action.type) {
      case ADD_ORATOR:
        console.log('add orator successful', action.orator)
        return state;
      case ADD_ORATOR_ERROR:
        console.log('add orator error', action.err);
        return state;
      default:
        return state;
    }
  };

  export default oratorReducer;
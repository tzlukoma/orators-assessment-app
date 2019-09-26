import {
  ADD_ORATOR,
  ADD_ORATOR_ERROR,
} from '../../constants/types'

const initialState = {
    orators:''
  }
  
  const oratorReducer = (state = initialState, action) => {
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
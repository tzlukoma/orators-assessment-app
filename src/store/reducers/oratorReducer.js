import {
  ADD_ORATOR,
  ADD_ORATOR_ERROR,
  GET_CHAPTER_ORATORS,
  GET_CHAPTER_ORATORS_ERROR
} from '../actions/types'

const initState = {
    orators:''
  }
  
  const oratorReducer = (state = initState, action) => {
    switch (action.type) {
      case ADD_ORATOR:
        console.log('add orator successful', action.orator)
        return state;
      case ADD_ORATOR_ERROR:
        console.log('add orator error', action.err);
        return state;
      case GET_CHAPTER_ORATORS:
        console.log('orators returned',action.orators)  
        return {...state, orators:action.orators};
      case GET_CHAPTER_ORATORS_ERROR:
          console.log("error getting orators for chapter: ", action.err);
          return state;
      default:
        return state;
    }
  };

  export default oratorReducer;
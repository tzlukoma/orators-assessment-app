const initState = {
    
  }
  
  const oratorReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_ORATOR':
        console.log('created orator', action.orator)
        return state;
      case 'CREATE_ORATOR_ERROR':
        console.log('create orator error', action.err);
        return state;
      default:
        return state;
    }
  };

  export default oratorReducer;
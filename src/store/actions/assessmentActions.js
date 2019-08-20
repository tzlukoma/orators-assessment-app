export const createAssessment = (assessment) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({type: 'CREATE_ASSESSMENT', assessment})
    }
}
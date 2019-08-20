const initState = {
    assessments: [
        {"id":2,"coach_id":3,"orator_id":3,"projection_rating":3,"tone_rating":5,"poise_rating":1,"focus_rating":4,"presentation_rating":4,"comment":"Engage more with the lesson so that you can improve","timestamp":"1559269207"},
        {"id":3,"coach_id":3,"orator_id":5,"projection_rating":3,"tone_rating":1,"poise_rating":1,"focus_rating":2,"presentation_rating":4,"comment":"Excellent engagement, effort and participation","timestamp":"1553901013"},
        {"id":4,"coach_id":3,"orator_id":10,"projection_rating":5,"tone_rating":5,"poise_rating":5,"focus_rating":5,"presentation_rating":5,"comment":"Be sure to incorporate feedback you have been given.","timestamp":"1558567238"},
        {"id":5,"coach_id":3,"orator_id":6,"projection_rating":5,"tone_rating":1,"poise_rating":1,"focus_rating":3,"presentation_rating":2,"comment":"Well done!","timestamp":"1558087004"},
    ]
  }
  
  const assessmentReducer = (state = initState, action) => {
    switch(action.type){
      case 'CREATE_ASSESSMENT':
        console.log('created assessment', action.assessment)
    }
    return state;
  };
  
  export default assessmentReducer;
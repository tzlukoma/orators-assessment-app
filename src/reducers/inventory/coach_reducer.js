export default function(state={},action){

    switch(action.type){
        
        case 'GET_COACHES_ALL':
            return {...state,coachList:action.payload}
        default:
            return state;
    }
}
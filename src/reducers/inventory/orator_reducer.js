export default function(state={},action){

    switch(action.type){
        
        case 'GET_ORATORS_ALL':
            return {...state,oratorList:action.payload}
        default:
            return state;
    }
}
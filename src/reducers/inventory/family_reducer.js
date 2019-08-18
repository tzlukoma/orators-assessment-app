export default function(state={},action){

    switch(action.type){
        
        case 'GET_FAMILIES_ALL':
            return {...state,familyList:action.payload}
        default:
            return state;
    }
}
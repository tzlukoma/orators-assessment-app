export default function(state={},action){

    switch(action.type){
        
        case 'GET_CHAPTERS_ALL':
            return {...state,chapterList:action.payload}
        default:
            return state;
    }
}
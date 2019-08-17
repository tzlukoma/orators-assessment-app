import axios from 'axios'
const URL = 'http://localhost:3002'

export function chaptersListAll(){
    
    const request = axios.get(`${URL}/chapters`)
                    .then(response => response.data)
    
    return {
        type: 'GET_CHAPTERS_ALL',
        payload: request
    }
}
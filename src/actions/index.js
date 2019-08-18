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

export function coachesListAll(){
    
    const request = axios.get(`${URL}/coaches`)
                    .then(response => response.data)
    
    return {
        type: 'GET_COACHES_ALL',
        payload: request
    }
}

export function familiesListAll(){
    
    const request = axios.get(`${URL}/families`)
                    .then(response => response.data)
    
    return {
        type: 'GET_FAMILIES_ALL',
        payload: request
    }
}

export function oratorsListAll(){
    
    const request = axios.get(`${URL}/orators`)
                    .then(response => response.data)
    
    return {
        type: 'GET_ORATORS_ALL',
        payload: request
    }
}
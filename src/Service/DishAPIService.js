import config from '../config';
import TokenService from './TokenService';

const DishAPIService = {
    
    getDishes(id){
        return fetch(`${config.API_ENDPOINT}/dish/${id}`, {
            headers: {
                'authorization' : `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => (!res.ok) 
            ? res.json().then(event => Promise.reject(event)) 
            : res.json() 
        )
    },

    postDish(dish, id){
        return fetch(`${config.API_ENDPOINT}/dish/${id}`, {
            method: 'POST',
            headers: {
                'context-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(dish)
        })
        .then(res => (!res.ok)
            ? res.json().then(event => Promise.reject(event))
            : res.json()
        )
    },

    updateDish(dish, id){
        return fetch(`${config.API_ENDPOINT}/dish/${id}`, {
            method: 'PATCH',
            headers: {
                'authorization' : `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(dish)
        })
        .then (res => (!res.ok)
            ? res.jason().then(event => Promise.reject(event))
            : res.json()
        )
    },

    deleteDish(dish, id){
        return fetch(`${config.API_ENDPOINT}/dish/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(dish)
        })
        .then(res => (!res.ok) 
            ? res.json().then(event => Promise.reject(event))
            : res.json()
        )
    }

}

export default DishAPIService;
import config from '../config';

const AuthAPIService = {
    postLogin(credentials){
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(credentials)
        })
        .then(res => (!res.ok)
        ? res.json().then(event => Promise.reject(event))
        : res.json()
        )
    },

    postRest(rest){
        return fetch(`${config.API_ENDPOINT}/restaurant`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(rest),
        })
        .then(res => (!res.ok) 
        ? res.json().then(event => Promise.reject(event))
        : res.json()
        )
    },
}

export default AuthAPIService;
import config from '../config';

const AuthAPIService = {
    postLogin(credentials){
        return fetch(`${config.API_ENDPOINT}/login`, {
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
        // TODO MAKE TO SHOW ERROR MSGS ON SCREEN
        return fetch(`${config.API_ENDPOINT}/register`, {
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
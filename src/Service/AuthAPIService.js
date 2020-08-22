import BASE_URL from '../config';
import { API_KEY } from '../config';

const AuthAPIService = {
  async postLogin(credentials) {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
    return (!res.ok) 
      ? res.json().then((event) => Promise.reject(event)) 
      : res.json()
  },

  async postRest(rest) {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(rest),
    })
    return(!res.ok)
    ? res.json().then((event) => Promise.reject(event)) 
    : res.json()
  },
};

export default AuthAPIService;

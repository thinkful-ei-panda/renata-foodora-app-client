import BASE_URL from '../config';
import { API_KEY } from '../config';

const AuthAPIService = {
  postLogin(credentials) {
    return fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        //'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((res) =>
      !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    );
  },

  postRest(rest) {
    // TODO MAKE TO SHOW ERROR MSGS ON SCREEN
    return fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(rest),
    }).then((res) =>
      !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    );
  },

  deleteRest(rest) {
    return fetch(`${BASE_URL}/restaurant/:id` , {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'content-type': "application/json",
      },
      body: JSON.stringify(rest),
    }).then((res) =>
    !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
  );
}
};

export default AuthAPIService;

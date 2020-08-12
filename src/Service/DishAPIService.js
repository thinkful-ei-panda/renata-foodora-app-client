//import TokenService from "./TokenService";
import BASE_URL from "../config";
import { API_KEY } from "../config";

const DishAPIService = {
  getDish(id) {
    return fetch(`${BASE_URL}/dish/${id}`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
        //authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    );
  },

  postDish(dish) {
    return fetch(`${BASE_URL}/dish`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(dish),
    }).then((res) =>
      !res.ok
        ? res
            .json()
            .then((event) => console.log("error?=" + JSON.stringify(event)))
            .then((event) => Promise.reject(event))
        : res.json()
    );
  },

  updateDish(dish, id) {
    return fetch(`${BASE_URL}/dish/${id}`, {
      method: "PATCH",
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
        //authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(dish),
    }).then((res) =>
      !res.ok ? res.jason().then((event) => Promise.reject(event)) : res.json()
    );
  },

  deleteDish(dish, id) {
    return fetch(`${BASE_URL}/dish/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
        //authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(dish),
    }).then((res) =>
      !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    );
  },

  getAllTags() {
    return fetch(`${BASE_URL}/tag`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    }).then((res) =>
      !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    );
  },
};

export default DishAPIService;

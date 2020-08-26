//import TokenService from "./TokenService";
import BASE_URL from "../config";
import { API_KEY } from "../config";

const DishAPIService = {
  //USED TO POST A NEW DISH BY A LOGGED RESTAURANT - AddDish.js
  async postDish(dish) {    
    const res = await fetch(`${BASE_URL}/dish`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(dish),
    })
    return (!res.ok)
        ? res.json().then((event) => Promise.reject(event))
        : res.json()
  },

  //REMOVES A DISH FROM A LIST OF RESTAURANT DISHES
  //TODO put where this code is being used
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

  //GETTING ALL TAGS FROM THE BACKEND TO DISPLAY - DishCheckboxContainer.js
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

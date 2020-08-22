import BASE_URL from "../config";
import { API_KEY } from "../config";

const RestaurantLandingAPIDishes = {

  //TO GET THE DISHES FROM THAT SPECIFIC RESTAURANT
  getAllDishesFromRestaurantID(id) {
    return fetch(`${BASE_URL}/restaurant-dish-list/${id}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
    }).then(res =>
      (!res.ok) 
      ? res.json().then((event) => Promise.reject(event)) 
      : res.json()
    );
  },

  //TO DELETE A SPECIFIC DISH FROM THE SPECIFIC RESTAURANT
  deleteDishFromRestaurant(dish_id, restaurant_id){
    return fetch(`${BASE_URL}/restaurant-dish-list/${restaurant_id}?dish_id=${dish_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
    })
    // .then(res =>
    //   (!res.ok) 
    //   ? res.json().then((event) => Promise.reject(event)) 
    //   : res.json()
    // );
  },

  

  // TO DELETE/UPDATE THE RESTAURANT PROFILE INFO
  updateRestaurantDishList(dish) {
    return fetch(`${BASE_URL}/restaurant/:id`, {
        method: 'PATCH',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(dish),
    }).then(res =>
      (!res.ok) 
      ? res.json().then((event) => Promise.reject(event)) 
      : res.json()
    );
  },

  deleteRest(rest) {
    return fetch(`${BASE_URL}/restaurant/:id`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(rest),
    }).then(res =>
      (!res.ok) 
      ? res.json().then((event) => Promise.reject(event)) 
      : res.json()
    );
  },
};

export default RestaurantLandingAPIDishes;

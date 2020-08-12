import BASE_URL from "../config";
import { API_KEY } from "../config";

const SearchAPIService = {
  getSearchResult(anObj) {
    console.log('THIS IS A CALL FROM SEARCHAPISERVICE ' + JSON.stringify(anObj));

    return fetch(`${BASE_URL}/dishSearchResults?price=${anObj.price}&name=${anObj.name}`, {
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

export default SearchAPIService;

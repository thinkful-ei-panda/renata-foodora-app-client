import { TOKEN_KEY, REST_ID_KEY, REST_NAME_KEY } from "../config";
import jsonwebtoken from "jsonwebtoken";

const TokenService = {

  debugStorage() {
    return 'restId=[' + window.localStorage.getItem(REST_ID_KEY) + '], restName=[' + window.localStorage.getItem(REST_NAME_KEY) + '], token=[' + window.localStorage.getItem(TOKEN_KEY) + ']';
  },

  saveAuthToken(token) {
    window.localStorage.setItem(TOKEN_KEY, token);
  },
  saveRestId(restId) {
    window.localStorage.setItem(REST_ID_KEY, restId);
  },
  saveRestName(restName) {
    window.localStorage.setItem(REST_NAME_KEY, restName);
  },

  getAuthToken() {
    return window.localStorage.getItem(TOKEN_KEY);
  },

  getAuthData() {
    let token = this.getAuthToken();
    let data = jsonwebtoken.decode(token, { complete: true });
    return data;
  },

  getRestID() {
    return window.localStorage.getItem(REST_ID_KEY);
  },
  getRestName() {
    return window.localStorage.getItem(REST_NAME_KEY);
  },

  clearAuthToken() {
    window.localStorage.removeItem(TOKEN_KEY);
  },
  clearRestId() {
    window.localStorage.removeItem(REST_ID_KEY);
  },
  clearRestName() {
    window.localStorage.removeItem(REST_NAME_KEY);
  },

  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },

  makeBasicAuthToken(username, password) {
    return window.btoa(`${username}:${password}`);
  },
};

export default TokenService;

import config from "../config";
import jsonwebtoken from "jsonwebtoken";

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },

  saveRestId(id) {
    window.localStorage.setItem(config.ID_KEY, id);
  },

  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },

  getAuthData() {
    let token = this.getAuthToken();
    let data = jsonwebtoken.decode(token, { complete: true });
    return data;
  },

  getRestID() {
    return window.localStorage.getItem(config.ID_KEY);
  },

  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },

  clearRestId() {
    window.localStorage.removeItem(config.ID_KEY);
  },

  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },

  makeBasicAuthToken(username, password) {
    return window.btoa(`${username}:${password}`);
  },
};

export default TokenService;

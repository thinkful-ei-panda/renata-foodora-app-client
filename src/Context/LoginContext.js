import React from "react";

export const LoginContext = React.createContext({
  loggedInRestaurantId: null,
  loggedInRestaurantName: null,
  login: () => {},
  logout: () => {},
});

export default LoginContext;

import React from "react";
import { Link } from "react-router-dom";
import LoginContext from "../Context/LoginContext";

export default class Nav extends React.Component {
  static contextType = LoginContext;

  renderRestName(restName) {
    return <div className="name-rest">{`Welcome ${restName} Restaurant`}</div>;
  }

  render() {
    return (
      <nav className="navbar">
        <div className="header-box">
          <LoginContext.Consumer>
            {({ loggedInRestaurantId, loggedInRestaurantName, logout }) => {
              if (loggedInRestaurantId == null) {
                return (
                  <Link to={"/login"}>
                    <div>Login</div>
                  </Link>
                );
              } else {
                return (
                  <Link onClick={logout} to={"/"}>
                    <div>Logout</div>
                  </Link>
                );
              }
            }}
          </LoginContext.Consumer>
          <Link to={"/register"}>
            <div>Restaurant Register</div>
          </Link>
          <LoginContext.Consumer>
            {({ loggedInRestaurantId, loggedInRestaurantName }) => {
              if (loggedInRestaurantId != null) {
                return (
                  <Link to={"/register"}>
                    {this.renderRestName(loggedInRestaurantName)}
                  </Link>
                );
              } else {
                return <div />;
              }
            }}
          </LoginContext.Consumer>
        </div>
      </nav>
    );
  }
}

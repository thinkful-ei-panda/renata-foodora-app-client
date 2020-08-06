import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../Service/TokenService";
import LoginContext from "../Context/LoginContext";

export default class Nav extends React.Component {
  static contextType = LoginContext;

  handleLogout = () => {
    TokenService.clearAuthToken();
    TokenService.clearRestId();
    this.context.loggedIn = false;
    this.context.registered = false;
  };

  renderLogin() {
    return (
      <Link to={"/login"}>
        <div>Login</div>
      </Link>
    );
  }

  renderLogout() {
    return (
      <Link onClick={this.handleLogout} to={"/"}>
        <div>Logout</div>
      </Link>
    );
  }

  //TODO SHOW NAME WHEN LOGGED IN
  renderRestName() {
    let name = "";
    if (this.context.name) {
      name = `${this.context.name}'s`;
    }
    return <div className="name-rest">{`Welcome ${name} Restaurant`}</div>;
  }

  render() {
    return (
      <nav className="navbar">
        <div className="header-box">
          {/* <Link to={"/login"}>
            <div>Restaurant Login</div>
          </Link> */}
          {this.context.loggedIn 
          ? this.renderLogout() 
          : this.renderLogin()}
          <Link to={"/register"}>
            <div>Restaurant Register</div>
          </Link>
          <Link to={"/register"}>{this.renderRestName()}</Link>
        </div>
      </nav>
    );
  }
}

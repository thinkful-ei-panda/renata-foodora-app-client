import React from "react";
import { Link } from "react-router-dom";
import LoginContext from "../Context/LoginContext";

export default class Nav extends React.Component {
  static contextType = LoginContext;

//RENDERS ON THE FIRST PAGE THE NAME OF THE RESTAURANT ONCE IT'S LOGGED IN. CLICKABLE TO SEE IT'S INFO
  renderRestName(restName) {
    return <div className="login">{`Welcome, '${restName}'!`}</div>;
  }

//RESTAURANT ACTIONS THAT WILL BE MOVE
//TODO MOVE THIS OUT OF HERE
  renderRestActions(){
    return(
      <div>
        <Link to={'/restaurant-home/edit'}>
          <button>Update</button>
        </Link>
        <Link to={'/restaurant-home/delete'}>
          <button>Delete Account</button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="navbar">
        <div className="header-box">
    {/* INVOLVING CONTEXT AROUND THE LOGGING LINKS */}
          <LoginContext.Consumer>
            {({ loggedInRestaurantId, loggedInRestaurantName, logout }) => {
              if (loggedInRestaurantId == null) {
                // ACTUAL LINKS/PATH LOGIN AND LOGOUT
                return (
                  <Link to={"/login"}>
                    <div className="login">Login</div>
                  </Link>
                );
              } else {
                return (
                  <Link onClick={logout} to={"/"}>
                    <div className='login'>Logout</div>
                  </Link>
                );
              }
            }}
          </LoginContext.Consumer>

          {/* LINK/PATH TO REGISTER A NEW RESTAURANT */}
          <Link to={"/register"}>
            <div className="login">Restaurant Register</div>
          </Link>

          {/* CHECK IF RESTAURANT IS LOGGED IN, IN ORDER TO SHOW THE WELCOME MESSAGE */}
          {/* TODO DELETE RENDERRESTACTIONS */}
          <LoginContext.Consumer>
            {({ loggedInRestaurantId, loggedInRestaurantName }) => {
              if (loggedInRestaurantId != null) {
                return (
                  <div>
                  <Link to={"/restaurant-home"}>
                    {this.renderRestName(loggedInRestaurantName)}
                  </Link>
                  {this.renderRestActions()}
                  </div>
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

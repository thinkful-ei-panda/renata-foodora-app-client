import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../Service/TokenService';
import LoginContext from '../Context/LoginContext';

export default class Nav extends Component(){

  static contextType = LoginContext;

  handleLogout = () => {
    TokenService.clearAuthToken();
    TokenService.clearRestId();
    this.context.handleRestLoginState(false);
    this.context.handleRestRegisteredState(false);
  };

  renderLogin() {
    return(
      <Link to={'/login'}>
        <div>Login</div>
      </Link>
    );
  }

  renderLogout(){
    return(
      <Link 
      onClick={this.handleLogout}
      to={'/login'}>
        <div>Logout</div>
      </Link>
    );
  }

  renderRestName(){
    let name = 'My';
    if(this.context.restname){
      name = `${this.context.restname}'s`;
    }
    return <div className="name-rest">{`${name} Restaurant`}</div>;
  }

  render(){
    return(
      <>
      <nav className='navbar'>
        <div className='header-box'>
          <Link to={'/'}>
          <h1>Foodora</h1>
          </Link>
          <Link to={'/login'}>
            <div>Restaurant</div>
          </Link>
          <Link to={'/dish'}>
            {this.renderRestName}
          </Link>
            {this.context.loggedIn 
            ? this.renderLogout() 
            : this.renderLogin()}
        </div>
      </nav>
      </>
    );
  }
}
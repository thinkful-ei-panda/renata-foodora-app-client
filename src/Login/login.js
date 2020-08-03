import React, { Component } from 'react';
import LoginContext from '../Context/LoginContext';
import TokenService from './Service/TokenService';
import AuthAPIService from './Service/AuthAPIService';
import GridLoader from "react-spinners/GridLoader";

export default class Login extends Component{

    static defaultProps ={
        onLoginSuccess: () => {},
        onRegistrationSuccess: () => {},
    };

    static = LoginContext;

    state = {
        error: null,
        loading: false,
    };

    openTab(event){
        let tabName = event.currentTarget.value;
        let i, tabContent, tabLinks;

        tabContent = document.getElementsByClassName('tabContent');

        for(i=0; i < tabContent.length; i++){
            tabContent[i].style.display = 'none';
        }

        tabLinks = document.getElementsByClassName('tabLinks');
        
        for(i = 0; i < tabLinks.length; i++){
            tabLinks[i].className = tabLinks[i].className.replace('active', '');
        }

        document.getElementById(tabName).style.display = 'block';

        event.currentTarget.className += 'active';
    }

    handleRestSubmit = (event) => {
        this.state(
            {
                error: null,
                loading: true,
            },
        this.handleSubmitJWAuth(event)
        );
    };

    handleSubmitJWAuth = (event) => {
        event.preventDefault();

        const { username, password } = event.target;

        AuthAPIService.postLogin(
            {
                username: username.value,
                password: password.value,
            }
        )
        .then((res) => {
            username.value = '';
            password.value = '';
            TokenService.saveAuthToken(res.authToken);
            TokenService.saveRestId(res.restaurant_id);
            this.context.saveRestName(res.restname);
            this.props.onLoginSuccess();
            this.context.handleRestLoginState(true);
            this.props.history.push('/login');
        })
        .catch((res) => {
            this.setState({ 
                error: res.error, 
                loading: false
            });
        });
    };

    handleRestRegisterSubmit = (event) => {
        event.preventDefault();
        this.setState({ error: null});
        const { username, password, name, phone } = event.target;

        AuthAPIService.postRest({
            username: username.value,
            password: password.value,
            name: name.value,
            phone: phone.value,
        })
        .then((rest) => {
            username.value = '';
            password.value = '';
            name.value = '';
            phone.value = '';
            this.props.onRegistrationSuccess();
            this.context.handleRestRegisteredState(true);
        })
        .catch((res) => {
            this.setState({ error: res.error });
        });
    };

    handleLoginAfterRegistration = (username, password) => {
        AuthAPIService.postLogin({
            username,
            password
        })
        .then((res) => {
            TokenService.saveAuthToken(res.authToken);
            this.props.onLoginSuccess();
            this.props.history.push('/login');
        })
        .catch((res) => {
            this.setState({ error: res.error });
        });
    };

    componentDidMount(){
        document.getElementsByClassName('tabLinks')[0].click();
    }

    render(){
        const { error, loading } = this.state;
        const { registered } = this.context;
        return(
            <main className="landing-main">
            {loading && (
              <div className="loading-screen">
                <GridLoader size={15} color={"#067368"} loading={loading} />
              </div>
            )}
            <div className="tab">
              <button
                className="tabLinks"
                id="defaultOpen"
                value="Login"
                onClick={this.openTab}
              >
                Restaurant Login
              </button>
              <button 
              className="tabLinks" 
              value="Register" 
              onClick={this.openTab}>
                Restaurant Register
              </button>
            </div>
            <div id="Login" 
            className="tabContent">
              <h3>Restaurant Login</h3>
              <form 
              className="login-form" 
              onSubmit={this.handleSubmit}>
                <div role="alert">{error && <p className="error">{error}</p>}</div>
                <div 
                className="user_name">
                  <label htmlFor="login-form-username">Username:</label>
                  <input
                    type="text"
                    name="username"
                    id="login-form-username"
                    required
                    value="Username"
                  ></input>
                </div>
                <div className="password">
                  <label htmlFor="login-form-password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="login-form-password"
                    value="********"
                    required
                  ></input>
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
    
            <div id="Register" 
            className="tabContent">
              <h3>Restaurant Register</h3>
              <form 
              className="register-form" 
              onSubmit={this.handleRegisterSubmit}>
                <div role="alert">
                  {error && <p className="error">{error}</p>}
                  {registered && (
                    <p className="registered-alert">Restaurant account created!</p>
                  )}
                </div>
                <div 
                className="username">
                  <label htmlFor="register-form-username">Username:</label>
                  <input
                    type="text"
                    name="username"
                    id="register-form-username"
                    value='Username'
                    required
                  ></input>
                </div>
                <div className="password">
                  <label htmlFor="register-form-password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="register-form-password"
                    value='******'
                    required
                  ></input>
                </div>
                <div className="restname">
                  <label htmlFor="register-form-restname">Restaurant Name:</label>
                  <input
                    type="text"
                    name="restname"
                    id="register-form-restname"
                    value="Joe's Pizzeria"
                    required
                  ></input>
                </div>
                <div className="phone">
                  <label htmlFor="register-form-phone">Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    id="register-form-phone"
                    value='317-123-3456'
                    required
                  ></input>
                </div>
                <button type="submit">Register</button>
              </form>
            </div>
          </main>
        );
    }
}
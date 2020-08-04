import React, { Component } from 'react';
import LoginContext from '../Context/LoginContext';
import AuthAPIService from '../Service/AuthAPIService';
import TokenService from '../Service/TokenService';
import ScaleLoader from "react-spinners/ScaleLoader";

export default class Register extends Component{

    state = {
        username: '',
        password: '',
        name: '',
        phone: ''
    };

       static defaultProps ={
        onRegistrationSuccess: () => {}
    };

    static = LoginContext;

    handleRegChange = (event) => this.setState(
        {
            [event.target.name]: event.target.value
        }
    );

    handleRegSubmit = (event) => {
        event.preventDefault();
        this.props.postRest(
            {
                username: this.state.username,
                password: this.state.password,
                name: this.state.name,
                phone: this.state.phone,
                error: null,
                loading: true
            }
        );
        this.setState(
            {
                username: '',
                password: '',
                name: '',
                phone: ''
            }
        );
        this.handleRestSubmitJWTAuth(event)
    };
    
    handleRestSubmitJWAuth = (event) => {
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
            this.props.onRegistrationSuccess();
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

    render(){
        const { error, loading } = this.state;
        const { registered } = this.context;
        return(
            <div>
            {loading && (
            <div className="loading-screen">
            <ScaleLoader size={35} color={"#067368"} loading={loading} />
            {/* TODO remember to change color  */}
            </div>
            )}
            <div id="register" 
            className="tabContent">
              <h3>Restaurant Register</h3>
              <form 
              className="register-form" 
              onSubmit={this.handleRegSubmit}>
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
                    value={this.state.username}
                    onChange={this.handleRegChange}
                    required
                  ></input>
                </div>
                <div className="password">
                  <label htmlFor="register-form-password">Password:</label>
                  <input
                    type="text"
                    name="password"
                    id="register-form-password"
                    value={this.state.password}
                    onChange={this.handleRegChange}
                    required
                  ></input>
                </div>
                <div className="restname">
                  <label htmlFor="register-form-restname">Restaurant Name:</label>
                  <input
                    type="text"
                    name="name"
                    id="register-form-restname"
                    value={this.state.name}
                    onChange={this.handleRegChange}
                    required
                  ></input>
                </div>
                <div className="phone">
                  <label htmlFor="register-form-phone">Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    id="register-form-phone"
                    value={this.state.phone}
                    onChange={this.handleRegChange}
                    required
                  ></input>
                </div>
                <button type="submit" onSubmit={this.handleRegSubmit}>Register</button>
              </form>
        </div>
        </div>
        );
    };
}